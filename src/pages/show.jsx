import ShowHero from "@/sections/ShowHero";
import MovieDetails from "@/sections/MovieDetails";
import Seasons from "@/components/Seasons";

export const metadata = {
  title: 'Show - Stranger Things',
}

export default () => {
  return (
    <>
      <ShowHero />
      <MovieDetails
        seasons={<Seasons />}
      />
    </>
  )
}