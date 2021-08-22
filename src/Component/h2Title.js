import { ChevronRightIcon } from '@heroicons/react/outline';

function H2({ content }) {
  return (
    <h2 className='uppercase text-2xl sticky text-white font-medium mx-6 sm:ml-32 mb-5 flex items-center'>
      {content} <ChevronRightIcon className='h-6 w-6 ml-3 -mb-0.5' />
    </h2>
  );
}
export default H2;
