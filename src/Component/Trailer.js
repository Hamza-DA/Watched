import { useEffect, useState } from 'react';
import axios from 'axios';

function Trailer({ title, id }) {
  useEffect(() => {
    getVideo();
  }, [id]);
  const [Url, setUrl] = useState('');
  const getVideo = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_WATCHED_API_KEY}&language=en-US`
      )
      .then((res) => {
        setUrl(res.data.results[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div className='bg-primary'>
        <div className='sm:px-12 lg:px-32 px-6 '>
          <iframe
            className='w-full h-80 lg:h-96'
            src={Url && `https://www.youtube.com/embed/${Url.key}`}
            title={title}
            frameborder='0'
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Trailer;
