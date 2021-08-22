import HeroSection from '../Component/HeroSection';
import PopularMovies from '../Component/PopularForEachType';

function HomeComponent() {
  return (
    <>
      <HeroSection />
      <PopularMovies type={'movie/popular'} title={'Most popular'} />
      <PopularMovies type={'movie/upcoming'} title={'Upcoming'} />
    </>
  );
}

export default HomeComponent;
