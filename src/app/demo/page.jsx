import VantaBackground from "@/components/VantaBackground";

export default function DemoPage() {
  return (
    <VantaBackground dotHex={0x0000ff} lineHex={0x3a5ff}>
      <h1 className="text-white text-4xl font-bold">Hello with blue net</h1>
    </VantaBackground>
  );
}
