import type { pw_pokemon } from '@prisma/client'
import Link from 'next/link'
import Image from 'next/image'
import AttrIcon from './attrIcon'

export interface IPokeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  pokemon: pw_pokemon
}

export default function PokeCard({ pokemon }: IPokeCardProps) {
  return (
    <Link
      className="flex max-w-xs flex-col gap-2 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
      href={`/pokemon/${pokemon.index}`}
    >
      <div className="md:w-30 md:h-30 relative h-24 w-24 lg:h-48 lg:w-48">
        <Image
          src={pokemon.imgUrl}
          alt={pokemon.imgUrl}
          fill
          sizes="(max-width: 768px) 100vw,
        (max-width: 1024px) 50vw,
        33vw"
        />
      </div>
      <span className="font-bold text-gray-300">{'#' + pokemon.index}</span>
      <span className="text-md font-bold md:text-xl lg:text-2xl">
        {pokemon.nameZh}
      </span>
      <div className="flex gap-2">
        <AttrIcon type={pokemon.type1} />
        {pokemon.type2 ? <AttrIcon type={pokemon.type2} /> : ''}
      </div>
    </Link>
  )
}
