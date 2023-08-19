import { MdArrowForwardIos } from "react-icons/md"

import { Character } from "#types/characters";

interface EpisodeProps {
  id: number
  name: string
  air_date: string
  episode: string
  characters: Character[]
  url: string
  created: string
}

export default function EpisodeInfo({data}: { data: EpisodeProps }) {
  return (
    <div className="flex justify-between items-center py-3 mx-3 border-b-2">
      <div>
        <p className="font-bold mb-1">{data.episode}</p>
        <p className="text-sm text-gray-500">{data.name}</p>
        <p className="text-gray-500 text-[10px] tracking-wide uppercase">{data.air_date}</p>
      </div>
      <MdArrowForwardIos  size={18} className="text-gray-500 cursor-pointer"/>
    </div>
  )
}
