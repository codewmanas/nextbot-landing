import Image from "next/image";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="w-screen h-screen min-h-screen flex items-center justify-center ">
      <Spline
      scene="https://prod.spline.design/9X-ehZ9FXPrHcKJy/scene.splinecode"
      className="w-full h-full "
      />
    </main>
  );
}
