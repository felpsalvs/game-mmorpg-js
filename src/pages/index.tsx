import Image from "next/image";
import { useState } from "react";

export default function Home(props) {
  const [collapsedSkills, setCollapsedSkills] = useState(true);
  const characters = [
    {
      name: "Rouge",
      emoji: "🏹",
      level: 99,
      image: "/rouge.png",
    },
    {
      name: "Druid",
      emoji: "🐻",
      level: 99,
      image: "/druid.png",
    },
    {
      name: "Mage",
      emoji: "🧙‍♂️",
      level: 89,
      image: "/mage.png",
    },
    {
      name: "Warrior",
      emoji: "🛡️",
      level: 99,
      image: "/warrior.png",
    },
  ];
  return (
    <main className="flex h-full w-full gap-2 bg-[#152724]">
      <div className="flex h-full w-full gap-2 bg-[#152724]">
        <div className="golden-gradient hidden w-fit p-2 sm:block">
          <Image
            src="/rouge.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-fullh h-full object-cover"
          />
        </div>
        <div className="flex w-full flex-col justify-between bg-[#1D2F2C]">
          <div className="golden-gradient w-full rounded-sm p-1">
            <div className="bg-[#2c534b]">
              <h1
                className="medieval-font p-2 text-2xl font-bold text-white"
                onClick={() => setCollapsedSkills(!collapsedSkills)}
              >
                Personagens
              </h1>
              <ul
                className={`medieval-menu w-full overflow-y-auto ${collapsedSkills ? "" : "hidden"}`}
              >
                <li>
                  <a>Novo Jogo</a>
                </li>
                {characters.map((character, index) => (
                  <li key={index}>
                    <a>
                      {character.emoji} {character.name} Lv: {character.level}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="golden-gradient w-full bg-[#2C534B] p-1">
            <div className="bg-[#2c534b]">
              <h1 className="medieval-font p-2 text-2xl font-bold text-white">
                Ações
              </h1>
              <ul className="medieval-menu w-full overflow-y-auto">
                <li>
                  <a>Personagem</a>
                </li>
                <li>
                  <a>Inventario</a>
                </li>
                <li>
                  <a>
                    <div className="medieval-menu__item__content">Caçar</div>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="medieval-menu__item__content">Atacar</div>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="medieval-menu__item__content">Viajar</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="golden-gradient w-full bg-[#2C534B] p-1">
            <div className="bg-[#2c534b]">
              <h1
                className="medieval-font p-2 text-2xl font-bold text-white"
                onClick={() => setCollapsedSkills(!collapsedSkills)}
              >
                Skills
              </h1>
              <ul
                className={`medieval-menu w-full overflow-y-auto ${collapsedSkills ? "hidden" : ""}`}
              >
                <li>
                  <a>Apunhalhar 🗡️ [1]</a>
                </li>
                <li>
                  <a>Saraivada de flechas 🏹 [2]</a>
                </li>
                <li>
                  <a>Punhal venenoso 🗡️ [3]</a>
                </li>
                <li>
                  <a>Furtividade 🗡️ [4]</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full grow flex-col justify-end gap-1 bg-[#152724] pb-4">
            <h1 className="medieval-font bg-[#2c534b] p-2 text-2xl font-bold text-white">
              Dados
            </h1>
            <div className="text-md medieval-font rounded-md bg-red-600 text-center text-white">
              100/100
            </div>
            <div className="text-md medieval-font rounded-md bg-blue-600 text-center text-white">
              100/100
            </div>
            <div className="text-md medieval-font rounded-md bg-orange-600 text-center text-white">
              100/100
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 bg-[#152724]">
        <div className="golden-gradient w-full rounded-lg">
          <Image
            src="/Valdheim.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full rounded-xl object-cover p-2"
          />
        </div>
        <div className="flex h-full w-full flex-row rounded-lg">
          <div className="h-full w-full border-r-2 border-[#af9567]">
            <h2 className="medieval-font p-2 text-2xl text-[#af9567]">
              História
            </h2>
            <ul className="medieval-menu w-full overflow-y-auto">
              <li>
                <a>
                  <div className="flex h-full w-full justify-around">
                    <Image
                      src="/coin.png"
                      alt="Logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-10 w-10 object-cover"
                    />
                    <div className="m-auto">Encontre o Lobo cinzento [4]</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="h-full w-full">
            <h2 className="medieval-font p-2 text-2xl text-[#af9567]">
              Caçada
            </h2>
            <ul className="medieval-menu w-full overflow-y-auto">
              <li>
                <a>
                  <div className="flex h-full w-full justify-around">
                    <Image
                      src="/coin-1.png"
                      alt="Logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-10 w-10 object-cover"
                    />
                    <div className="m-auto">Mate 20 gremilins</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
