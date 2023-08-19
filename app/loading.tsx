import Image from "next/image";
import LogoName from "@assets/imgs/logo-name.png";

export default function loading() {
  return (
    <main className="flex flex-col items-center max-w-screen-lg mx-auto">
      <Image src={LogoName} alt="Rick and Morty text" className="my-5" />

      <ul className="grid gap-5 xl:grid-cols-[repeat(4,_minmax(0,_240px))] md:grid-cols-[repeat(2,_minmax(0,_240px))] grid-cols-[repeat(1,_minmax(0,_240px))] grid-rows-[repeat(4,minmax(0_340px))]">
        {new Array(20).fill("").map((_, index) => (
          <div key={index} className="shadow-xl">
            <div className="animate-pulse h-60 w-60 bg-gray-500 rounded-t"></div>
            <div className="animate-pulse h-20 w-60 bg-gray-400 rounded-b"></div>
          </div>
        ))}
      </ul>
    </main>
  );
}
