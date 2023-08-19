import Image from "next/image";
import Link from "next/link";

interface CharacterProps {
  data: {
    name: string;
    image: string;
    id: number;
    species: string;
  };
}

export default function CardCharacter({ data }: CharacterProps) {
  return (
    <li className="w-full drop-shadow-xl">
      <Link href={`/characters/${data.id}`}>
        <Image
          className="rounded-t-lg"
          src={data.image}
          width={240}
          height={200}
          alt={data.name}
        />
        <div className="rounded-b-md bg-white px-4 py-3">
          <p className="text-xl font-bold truncate">{data.name}</p>
          <p className="text-sm text-gray-500">{data.species}</p>
        </div>
      </Link>
    </li>
  );
}
