/**
 * Server Component
 * 
 *  - Components que executam no servidor next
 * 
 * Client Component
 * 
 *  - Components que executam no client
 */


import LogoName from "@assets/imgs/logo-name.png"
import Image from "next/image"
import { use, useState } from "react"
import CardCharacter from "@components/CardCharacter"

type character = {
  name: string
  image: string;
  id: number
  species: string
}

type Response = {
  results: character[]
}

async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character")
  return response.json()
}

export default function Home() {
  let response: Response = use(getCharacters())

  return (
    <main className="flex flex-col items-center max-w-screen-lg mx-auto">
      <Image src={LogoName} alt="Rick and Morty text" className="my-5"/>

      <ul className="grid gap-5 grid-cols-[repeat(1,_minmax(0,_240px))] md:grid-cols-[repeat(2,_minmax(0,_240px))]  xl:grid-cols-[repeat(4,_minmax(0,_240px))] grid-rows-[repeat(4,minmax(0_340px))]">
        {response.results.map(character => <CardCharacter key={character.id} data={character} />)}
      </ul>
    </main>
  )
}

