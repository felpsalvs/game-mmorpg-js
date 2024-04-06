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
  );
}
