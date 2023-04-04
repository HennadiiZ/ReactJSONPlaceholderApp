import { useEffect, useState, useContext } from 'react';
import { URL } from '../constants/constants';
import CardsList from '../components/cardsList/CardsList';
import Spinner from '../ui/spinner/Spinner';
import DataContext from '../_store/data-context'; 

const AllCardsPage = () => {
const cardsCtx = useContext(DataContext); 


// const [photos, setPhotos] = useState([]);

// useEffect(() => {
//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => setPhotos(data.slice(0, 20)));
// }, []);

// console.log(photos);
console.log('cardsCtx', cardsCtx.cards);
  
  return (
    <section>
      <div>        
        {/* {photos.length === 0 && <div style={{'textAlign': 'center', 'marginTop': '150px'}}> <Spinner /> </div>}
        <CardsList  photos={photos}/> */}

        {cardsCtx.totalCards === 0 && <div style={{'textAlign': 'center', 'marginTop': '150px'}}> <Spinner /> </div>}
        <CardsList  photos={cardsCtx.cards}/>
      </div>
    </section>  
  );
}

export default AllCardsPage;