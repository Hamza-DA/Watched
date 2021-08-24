import HeroSection from '../Component/HeroSection';
import PopularMovies from '../Component/PopularForEachType';
import SelectGenres from '../Component/SelectGenres';
function HomeComponent() {
  return (
    <>
      <HeroSection />
      <SelectGenres />
      <PopularMovies type={'movie/popular'} title={'Most popular'} />
      <PopularMovies type={'movie/upcoming'} title={'Upcoming'} />
    </>
  );
}

export default HomeComponent;
