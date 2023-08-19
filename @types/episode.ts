import { Character } from "./characters"

export type Episode = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: Character[]
  url: string
  created: string
}