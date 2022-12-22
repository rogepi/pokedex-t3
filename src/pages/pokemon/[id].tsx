import type { pw_pokemon } from '@prisma/client'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Loading from '../../components/loading'
import PokeCard from '../../components/pokeCard'
import { trpc } from '../../utils/trpc'

const PokemonDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, error } = trpc.pokemon.getById.useQuery(Number(id))
  if (isLoading) return <Loading />
  if (error) return <div>error</div>
  return <PokeCard pokemon={data as pw_pokemon} />
}

const Pokemon: NextPage = () => {
  return (
    <div className='min-h-[70vh]'>
      <PokemonDetail />
    </div>
  )
}

export default Pokemon
