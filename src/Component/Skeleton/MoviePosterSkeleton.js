export default function MoviePosterSkeleton() {
  return (
    <>
      <div className='w-96 h-180 relative bg-gray-400 animate-pulse duration-75'>
        <div className='absolute bottom-5 left-5'>
          <div className='bg-gray-500 w-48 h-7 rounded-sm'></div>
          <div className='bg-gray-500 w-32 h-5 rounded-sm mt-3'></div>
        </div>
      </div>
    </>
  );
}
