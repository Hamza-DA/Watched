export default function MovieHeroSkeleton({ isSingle }) {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-start items-start md:items-center w-screen h-180 relative bg-primary animate-pulse duration-75 sm:px-12 lg:px-32 px-6'>
        {isSingle === true ? (
          <div className='w-80 md:w-96 h-96 md:h-180 rounded-sm bg-gray-500 mb-10 md:mr-10  relative'>
            <div className='absolute top-5 left-5 bg-gray-600 w-52 h-12' />
          </div>
        ) : (
          ''
        )}
        <div className='flex flex-col'>
          <div className='bg-gray-500 w-96 h-12 rounded-sm' />
          <div className='flex mt-4 mb-6'>
            <div className='bg-gray-500 w-32 h-5 rounded-sm mr-3' />
            <div className='bg-gray-500 w-32 h-5 rounded-sm mr-3' />
            <div className='bg-gray-500 w-32 h-5 rounded-sm mr-3' />
          </div>
          <div className='bg-gray-500 w-72 h-5 rounded-sm mb-3' />
          <div className='bg-gray-500 w-80 h-5 rounded-sm mb-3' />
          <div className='bg-gray-500 w-60 h-5 rounded-sm mb-3' />
        </div>
      </div>
    </>
  );
}
