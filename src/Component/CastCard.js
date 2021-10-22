import user from '../resources/user.png';
function CastCard({ props }) {
  return (
    <>
      <div className='mr-3 h-72 w-52 flex-shrink-0 relative'>
        <img
          src={
            props.profile_path
              ? `https://image.tmdb.org/t/p/w500${props.profile_path}`
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
