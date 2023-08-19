import Image from "next/image";
import { use, useState } from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

import Information from "@components/Information";
import EpisodeInfo from "@components/EpisodeInfo";

import { Episode } from "#types/episode";
import { Character } from "#types/characters";
import { Input } from "@components/Input";

async function getCharacter(id: string) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.json();
}

async function getEpisodes() {
  const response = await fetch(`https://rickandmortyapi.com/api/episode`);
  return response.json();
}

export default function page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const characterInfo: Character = use(getCharacter(params.id));
  const episodeInfo: { results: Episode[] } = use(getEpisodes());

  return (
    <main className="flex flex-col items-center max-w-screen-lg mx-auto">
      <Input />
      <section className="sm:flex sm:items-start w-full p-3">
        <Link
          href="/"
          className="flex p-1 gap-3 items-center mt-7 flex-shrink-0"
        >
          <BiArrowBack size={22} />
          <p className="uppercase font-bold text-lg">Go back</p>
        </Link>
        <div className="flex flex-col items-center flex-1 w-full mt-4">
          <Image
            className="rounded-full border-4 border-gray-200"
            src={characterInfo.image}
            alt="tese"
            width={300}
            height={300}
          />
          <h1 className="text-5xl text-bold text-gray-800 mt-4">
            {characterInfo.name}
          </h1>
        </div>
      </section>

      <div className="p-5 md:flex md:gap-5 max-w-4xl w-full mx-auto mt-12">
        <section className="flex-1">
          <h2 className="text-xl text-gray-500 font-medium">Informations</h2>
          <div className="mt-0 sm:mt-9">
            <Information label="Gender" value={characterInfo.gender} />
            <Information label="Status" value={characterInfo.status} />
            <Information label="Specie" value={characterInfo.species} />
            <Information label="Origin" value={characterInfo.origin.name} />
            <Information label="Type" value={characterInfo.type || "unknow"} />
            <Information label="Location" value={characterInfo.location.name} />
          </div>
        </section>
        <section className="flex-1 mt-9 sm:mt-0">
          <h2 className="text-xl text-gray-500 font-medium ">Episodes</h2>
          <div className="mt-0 sm:mt-9 max-h-96 overflow-y-auto">
            {episodeInfo.results.map((episode) => (
              <EpisodeInfo key={episode.id} data={episode} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
