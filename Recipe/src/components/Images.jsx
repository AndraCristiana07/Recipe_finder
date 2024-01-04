import React, { useState, useEffect } from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import './Images.css'; 

export default function Images() {
  const [loadedImages, setLoadedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < itemData.length) {
        setLoadedImages((prevLoadedImages) => [...prevLoadedImages, currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 500); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <ImageList sx={{ width: 500, height: 500 }} cols={3} rowHeight={164}>
      {itemData.map((item, index) => (
        <ImageListItem key={item.img}>
          <img
            className={`image-fade-in ${loadedImages.includes(index) ? 'loaded' : ''}`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhOSPNEbjw7u2VKgukretXY78kvIFz69eMlV4zB1xDPo4vk_-16N5OHk5BI1vGBGYNIc&usqp=CAU',
    title: 'Hats',
  },
  {
    img: 'https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    title: 'Honey',
  },
  {
    img: 'https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1698867576489-6cbcca23ea76',
    title: 'Fern',
  },
  {
    img: 'https://img.freepik.com/premium-photo/quinoa-salad-vegetarian-food-photos-vibrant-colors-textures-this-healthy-superfood-fresh-green_763042-1580.jpg',
    title: 'Mushrooms',
  },

];