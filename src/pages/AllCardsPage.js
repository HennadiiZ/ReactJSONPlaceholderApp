import { useContext, useState } from 'react';
import CardsList from '../components/cardsList/CardsList';
import Spinner from '../ui/spinner/Spinner';
import DataContext from '../_store/data-context'; 
import { useAuth } from '../_store/auth-context';

import { useNavigate, Link, useHistory  } from 'react-router-dom';

const AllCardsPage = () => {
  const cardsCtx = useContext(DataContext); 

  console.log('cardsCtx', cardsCtx.cards);


  //------
  const [error, setError] = useState('');
  const { logout, currentUser } = useAuth();
  const history = useNavigate();
  // const history = useHistory();

  const logOutHandler = async () => {
    setError('');

    try {
      await logout();
      history('/auth/signin');
      // history.push('/cards');
    } catch {

    }
  };
  //------
  
  return (
    <section>
      <div>
        <button onClick={logOutHandler}>Log Out</button>
      </div>
      <div>       
        {cardsCtx.totalCards === 0 && <div style={{'textAlign': 'center', 'marginTop': '150px'}}> <Spinner /> </div>}
        <CardsList  photos={cardsCtx.cards}/>
      </div>
    </section>  
  );
}

export default AllCardsPage;