import classes from './CardsList.module.scss';
import CardItem from '../cardItem/CardItem';
import { useEffect, useState } from 'react';

const CardsList = (props) => {

const URL = 'https://jsonplaceholder.typicode.com/photos';
const [photos, setPhotos] = useState([]);


useEffect(() => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => setPhotos(data.slice(0, 20)));
}, []);

console.log(photos);

  return (
    <ul className={classes.list}>
      { 
        props.photos.map(item =>(
        <CardItem 
          key={item.id}
          id={item.id}
          title={item.title}
          url={item.url}
          thumbnailUrl={item.thumbnailUrl}
        />
       ))
      }
    </ul>
  );
};
  
export default CardsList;