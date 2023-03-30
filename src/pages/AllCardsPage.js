import { useEffect, useState, useContext } from 'react';
import { URL } from '../constants/constants';
import CardsList from '../components/cardsList/CardsList';

const AllCardsPage = () => {
//   const cityCtx = useContext(DataContext); 
const [photos, setPhotos] = useState([]);

useEffect(() => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => setPhotos(data.slice(0, 20)));
}, []);

console.log(photos);
  
  return (
    <section>
      <div>        
        {photos.length === 0 && 'Loading...'}
        <CardsList  photos={photos}/>
      </div>
    </section>  
  );
}

export default AllCardsPage;