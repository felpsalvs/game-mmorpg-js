import Image from "next/image";

export default function Home(props) {
  return (
    <>
      <main className="flex h-screen w-screen gap-2 bg-[#152724]">
        <div className="flex h-full w-full gap-2 bg-[#152724]">
          <div className="golden-gradient h-full w-fit p-2">
            <Image
              src="/druid.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="flex h-full w-full flex-col justify-between bg-[#1D2F2C]">
            <div className="w-full bg-[#2C534B]">
              <h1 className="text-4xl font-bold text-white">Menu 1</h1>
            </div>
            <div className="w-full bg-[#2C534B]">
              <h1 className="text-4xl font-bold text-white">Menu 2</h1>
            </div>
            <div className="w-full bg-[#2C534B]">
              <h1 className="text-4xl font-bold text-white">Menu 3</h1>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col gap-2 bg-[#152724]">
          <div className="h-full w-full bg-[#1D2F2C]">
            <h1 className="text-4xl font-bold text-white">Mapa</h1>
          </div>
          <div className="h-full w-full bg-[#1D2F2C]">
            <h1 className="text-4xl font-bold text-white">Atividades</h1>
          </div>
        </div>
      </main>
    </>
  );
}
