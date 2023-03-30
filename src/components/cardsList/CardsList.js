import classes from './CardsList.module.scss';
import CardItem from '../cardItem/CardItem';
// import { useEffect, useState } from 'react';
// import { URL } from '../../constants/constants';

const CardsList = (props) => {
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