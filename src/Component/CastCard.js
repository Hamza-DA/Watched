import user from '../project resources/user.png';
function CastCard({ props }) {
  return (
    <>
      {/* {(
        <div className='animate-pulse mr-3 h-72 w-52 flex-shrink-0 relative'>
          <div className='w-full h-full bg-gray-500'></div>
          <div className='absolute bottom-0 flex-col p-5 overscroll-x-hidden w-full '>
            <div className='w-full h-6 bg-gray-400'></div>
            <div className='w-5/6 mt-2 h-4 bg-gray-400'></div>
          </div>
        </div>
      ) && ( */}
      <div className='mr-3 h-72 w-52 flex-shrink-0 relative'>
        <img
          src={
            props.profile_path
              ? `https://image.tmdb.org/t/p/original${props.profile_path}`
              : user
          }
          alt={props.name}
          className='object-cover w-full h-full'
        />
        <div className='absolute bottom-0 flex-col p-5 overscroll-x-hidden w-full bg-gradient-to-t from-black to-transparent'>
          <h3 className='text-xl font-medium text-white w-full mb-1'>
            {props.original_name}
          </h3>
          <h4 className='text-sm font-normal text-gray-300 w-full mb-1'>
            as "{props.character}"
          </h4>
        </div>
      </div>
    </>
  );
}

export default CastCard;
