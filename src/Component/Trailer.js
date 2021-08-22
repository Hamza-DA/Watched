import { useEffect, useState } from 'react';
import api_key from './api_key.json';
import axios from 'axios';
function Trailer({ title, id }) {
  useEffect(() => {
    getVideo();
  }, [id]);
  const [Url, setUrl] = useState('');
  const getVideo = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key.key}&language=en-US`
      )
      .then((res) => {
        setUrl(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className='bg-primary'>
        <div className='mx-6 sm:mx-32 py-9 '>
          <iframe
            className='w-full h-80 sm:h-screen'
            src={`https://www.youtube.com/embed/${Url.key}`}
            title={title}
            frameborder='0'
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Trailer;
