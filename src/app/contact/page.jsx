



"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const videoRef = useRef(null);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const rotateX = ((y / offsetHeight) - 0.5) * 10;
    const rotateY = ((x / offsetWidth) - 0.5) * 10;

    if (videoRef.current) {
      videoRef.current.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const resetTilt = () => {
    if (videoRef.current) {
      videoRef.current.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("❌ Failed to send. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out pt-20 ml-20"
      >
        <source src="/contact-bg.mp4" type="video/mp4" />
      </video>


      <div className="relative z-10 w-full flex justify-center lg:justify-start px-4 lg:px-20">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-6 sm:p-10 rounded-2xl text-white w-full sm:w-4/5 lg:w-[500px] text-center lg:text-left space-y-6">
          <h1 className="text-3xl primary-font sm:text-4xl font-extrabold tracking-wider text-[#67C6FE] text-center">
            Contact Us
          </h1>
          <p className="text-gray-300 sec-font text-sm sm:text-base text-center">
            We’d love to hear from you. Reach out anytime!
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4 flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 sec-font w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#67C6FE]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 sec-font w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#67C6FE]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="p-3 sec-font w-full h-28 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#67C6FE]"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="relative primary-font group px-8 py-3 rounded-lg font-bold text-white bg-[#67C6FE]/50 border border-[#67C6FE]/40 overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50"
            >
              <span className="relative z-10">{loading ? "Sending..." : "Send"}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></span>
            </button>
          </form>

          {status && (
            <p className="text-sm text-center mt-3">
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
