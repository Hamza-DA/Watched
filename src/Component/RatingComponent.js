import { StarIcon } from '@heroicons/react/solid';

function RatingComponent({ ratingProps }) {
  const renderStars = () => {
    let basicStars = [];
    const reviews = Math.floor(ratingProps) / 2;
    for (let i = 0; i < 5; i++) {
      basicStars.push(
        <StarIcon
          className={`w-5 h-5 text-green-${
            i < reviews ? '400' : '700'
          } fill-current`}
        />
      );
    }
    return basicStars;
  };
  return (
    <>
      <div className='text-green-400 text-lg font-bold font-Display mr-3 flex items-center'>
        <span className='flex items-center -mt-0.5'>{renderStars()}</span>
        <span className='ml-1'>
          {ratingProps && ratingProps.toFixed(1)}
          <span className='text-sm'>/10</span>
        </span>
      </div>
    </>
  );
}
export default RatingComponent;
