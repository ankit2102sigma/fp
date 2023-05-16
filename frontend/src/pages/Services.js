import { useParams } from 'react-router-dom';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Services() {
  const id = sessionStorage.getItem('productId');
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/carriers/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

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
  
    return <img style={{ width: "100%" }} src={thumbnail} alt="Video Thumbnail" />;
  }
  
  return (
    <Grid container style={{ height: "100vh", backgroundColor: "#f7f7f7" }}>
      <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card sx={{ maxWidth: 600 }}>
          {product.image_url && <CardMedia component="img" height="300" image={product.image_url} alt={product.name} />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stream: {product.stream}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Interest: {product.interest}
            </Typography >
            {product.youtube_video_id && <VideoThumbnail videoId={product.youtube_video_id} />}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ maxWidth: 600 }}>
          <Typography variant="h4" gutterBottom>About this product</Typography>
          <Typography variant="body1">{product.details}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
