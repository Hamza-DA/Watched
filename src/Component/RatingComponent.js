import react from 'react';

function RatingComponent({ ratingProps }) {
  const forr = () => {
    let items = [];
    for (let i = 0; i < Math.floor(ratingProps) / 2; i++) {
      items.push(i);
    }
    return items.map((e) => {
      return (
        <>
          <svg
            width='14'
            height='14'
            viewBox='0 0 13 12'
            xmlns='http://www.w3.org/2000/svg'
            className='mx-0.5'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M6.29466 0.413818L8.12119 4.19348L12.2058 4.8033L9.25021 7.74371L9.94772 11.8977L6.29466 9.93544L2.64159 11.8977L3.3391 7.74371L0.383545 4.8033L4.46812 4.19348L6.29466 0.413818V0.413818Z'
              fill='#34d399'
            />
          </svg>
        </>
      );
    });
  };

  return (
    <>
      <span className='text-green-400 text-lg font-bold mr-3 flex items-center'>
        {forr()} <span className='ml-2 -mb-0.5'>{ratingProps}</span>
      </span>
    </>
  );
}

export default RatingComponent;
