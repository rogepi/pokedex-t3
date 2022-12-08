import { type NextPage } from "next";
import Loading from "../components/loading";
import PokeCard from "../components/pokeCard";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, status, fetchNextPage, hasNextPage } = trpc.pokemon.infinite.useInfiniteQuery(
    {
      limit: 20
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor
    }
  )

  return (
    <>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 ">
        {data?.pages.map(page =>
          <>
            {
              page.items.map(item =>
                <PokeCard pokemon={item} key={item.id} />
              )
            }
          </>
        )}
      </div>
      {status === 'loading' ? <Loading /> : null}
      {hasNextPage ?
        <button className="my-8 hover:text-[1.1rem] transition ease-in-out  hover:translate-y-0.5 underline underline-offset-4  text-white hover:text-[#e8ddff]"
          onClick={() => fetchNextPage()}>加载更多</button>
        : null}
    </>
  );
};

export default Home;
