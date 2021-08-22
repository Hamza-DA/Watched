import {
  ShieldExclamationIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

export default function FamilyShield({ adult }) {
  return (
    <>
      <div className='flex absolute top-5 left-5 p-2 bg-black bg-opacity-70 rounded-lg'>
        {adult === false ? (
          <div className='flex items-center'>
            <ShieldCheckIcon className='h-8 w-8 text-green-500' />
            <span className='text-base font-normal tracking-wide ml-2 text-green-50'>
              Suitable for all ages
            </span>
          </div>
        ) : (
          <div className='flex items-center'>
            <ShieldExclamationIcon className='h-8 w-8 text-red-500' />
            <span className='text-base font-normal tracking-wide ml-2 text-red-50'>
              Only for adult
            </span>
          </div>
        )}
      </div>
    </>
  );
}
