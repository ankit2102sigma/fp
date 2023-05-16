// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function VideoThumbnail({ youtubeLink }) {
//   const [thumbnail, setThumbnail] = useState('');

//   useEffect(() => {
//     const getVideoDetails = async () => {
//       const videoId = extractVideoIdFromLink(youtubeLink);
//       const key = "AIzaSyAzbRE_ITqqwXIfs8sLah8DmgHfLUP15uc";
//       const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${key}`);
//       const thumbnailUrl = response.data.items[0].snippet.thumbnails.medium.url;
//       setThumbnail(thumbnailUrl);
//     };

//     getVideoDetails();
//   }, [youtubeLink]);

//   const extractVideoIdFromLink = link => {
//     const pattern = /(?:youtube\.com\/(?:[^\/\n\s]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([\w-]{11})/;
//     const matches = link.match(pattern);
//     return matches ? matches[1] : null;
//   };

//   return (
//     <img src={thumbnail} alt="Video thumbnail" />
//   );
// }

// export default VideoThumbnail;
