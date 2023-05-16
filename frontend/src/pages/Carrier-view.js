import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Carriers() {
  const [carriers, setCarriers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/carriers')
      .then(response => {
        setCarriers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function VideoThumbnail({ videoId }) {
    const [thumbnail, setThumbnail] = useState(null);
  
    useEffect(() => {
      async function getVideoDetails() {
        try {
          const key = "AIzaSyAzbRE_ITqqwXIfs8sLah8DmgHfLUP15uc";
          const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${key}`);
          const thumbnailUrl = response.data.items[0].snippet.thumbnails.medium.url;
          setThumbnail(thumbnailUrl);
        } catch (error) {
          console.error(error);
        }
      }
  
      getVideoDetails();
    }, [videoId]);
  
    return <img src={thumbnail} alt="Video Thumbnail" />;
  }
  

  return (
    <div>
      <h1>Carriers List</h1>
      <ul>
        {carriers.map(carrier => (
          <li key={carrier.id}>
            <h2>{carrier.name}</h2>
            <p>{carrier.description}</p>
            <p>{carrier.stream}</p>
            <p>{carrier.interest}</p>
            <a href={carrier.link}>Watch on YouTube</a>
            {carrier.youtube_video_id && <VideoThumbnail videoId={carrier.youtube_video_id} />}
            {carrier.more && <p>{carrier.more}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carriers;
