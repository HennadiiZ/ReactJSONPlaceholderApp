import { useContext } from 'react';
import CardsList from '../components/cardsList/CardsList';
import Spinner from '../ui/spinner/Spinner';
import DataContext from '../_store/data-context'; 

const AllCardsPage = () => {
const cardsCtx = useContext(DataContext); 

console.log('cardsCtx', cardsCtx.cards);
  
  return (
    <section>
      <div>       
        {cardsCtx.totalCards === 0 && <div style={{'textAlign': 'center', 'marginTop': '150px'}}> <Spinner /> </div>}
        <CardsList  photos={cardsCtx.cards}/>
      </div>
    </section>  
  );
}

export default AllCardsPage;