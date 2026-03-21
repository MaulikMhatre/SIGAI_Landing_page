"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

/**
 * VantaBackground
 * - dotHex / lineHex: numeric hexes like 0x0000ff or 0xffde00
 * - gradientClass: tailwind classes for gradient (customize)
 */
export default function VantaBackground({
  children,
  dotHex = 0xffde00,
  lineHex = 0xffde00,
}) {
  const containerRef = useRef(null);
  const effectRef = useRef(null);
  const retryRef = useRef(null);

  useEffect(() => {
    if (!effectRef.current && containerRef.current) {
      // initialize Vanta Net
      effectRef.current = NET({
        el: containerRef.current,
        THREE,
        backgroundAlpha: 0, // transparent so gradient shows through
        color: dotHex,      // dot color (Vanta option)
        // harmless to include (some builds ignore it)
        lineColor: lineHex,
        showDots: true,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        points: 10,
        spacing: 15,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        maxDistance: 20,
      });

      // Increase dot size slightly
    if (effectRef.current.mesh) {
      effectRef.current.mesh.scale.set(1.2, 1.2, 1.2);
    }

    // Reduce line opacity randomly
    const scene = effectRef.current.scene || effectRef.current._scene;
    if (scene) {
      scene.traverse((obj) => {
        if (obj.material && obj.material.opacity !== undefined) {
          obj.material.opacity = 0.4;
          obj.material.transparent = true;
          obj.material.needsUpdate = true;
        }
      });
    }

      // Try to force line color — Vanta may create the line material slightly later,
      // so retry for a short period until we find it.
      let tries = 0;
      const maxTries = 60; // ~3 seconds if interval=50ms
      const interval = 50;

      const tryApply = () => {
        const effect = effectRef.current;
        if (!effect) return;
        const applied = applyLineColorToEffect(effect, lineHex);
        tries += 1;
        if (!applied && tries < maxTries) {
          retryRef.current = setTimeout(tryApply, interval);
        }
      };

      tryApply();
    }

    return () => {
      // cleanup
      if (retryRef.current) clearTimeout(retryRef.current);
      if (effectRef.current) {
        try {
          effectRef.current.destroy();
        } catch (e) {
          // ignore
        }
        effectRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dotHex, lineHex]);

  // Attempt to set colors on likely properties and traverse the scene
  function applyLineColorToEffect(effect, hex) {
    const color = new THREE.Color(hex);
    let applied = false;

    try {
      // common direct properties
      if (effect.material && effect.material.color) {
        effect.material.color.set(color);
        effect.material.needsUpdate = true;
        applied = true;
      }
      if (effect.lineMaterial && effect.lineMaterial.color) {
        effect.lineMaterial.color.set(color);
        effect.lineMaterial.needsUpdate = true;
        applied = true;
      }
      if (effect.mesh && effect.mesh.material && effect.mesh.material.color) {
        effect.mesh.material.color.set(color);
        effect.mesh.material.needsUpdate = true;
        applied = true;
      }
    } catch (e) {
      // ignore
    }

    // traverse any scene object(s)
    const scene = effect.scene || effect._scene || effect.scene3D || null;
    if (scene && scene.traverse) {
      scene.traverse((obj) => {
        if (!obj || !obj.material) return;
        const mat = obj.material;
        if (Array.isArray(mat)) {
          mat.forEach((m) => {
            if (m && m.color) {
              m.color.set(color);
              m.needsUpdate = true;
              applied = true;
            }
          });
        } else {
          if (mat.color) {
            mat.color.set(color);
            mat.needsUpdate = true;
            applied = true;
          }
        }
      });
    }

    return applied;
  }

  return (
    <div className="relative h-screen w-screen">
      {/* gradient background behind the Vanta canvas */}
      <div className={`absolute inset-0 grad-bg`} />

      {/* Vanta attaches to this div */}
      <div ref={containerRef} className="absolute inset-0" />

      {/* page content above the effect */}
      <div className="relative flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}
