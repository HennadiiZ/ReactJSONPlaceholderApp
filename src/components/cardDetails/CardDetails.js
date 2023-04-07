import classes from './CardDetails.module.scss';
import { useContext, useState, useEffect } from 'react';
import DataContext from '../../_store/data-context'; 
import { useNavigate  } from 'react-router-dom';

const CardDetails = (props) => {
  const cardsCtx = useContext(DataContext); 
  const history = useNavigate();
 
  const card = cardsCtx?.cards?.find(item => +item.id ===  +props.cardId); 

  const [title, setTitle] = useState(card.title); // ---------
  const [showUpdateButton, setShowUpdateButton] = useState(false); // ---------
  
  useEffect(() => {
    setTitle(card.title);
  }, [card.title]);

  const titleChangeHandler = (event) => {  // ---------
    setTitle(event.target.value);
  };

  const titleEditHandler = () => {
    setShowUpdateButton(true);
  };

  const titleUpdateHandler = () => { 
    setShowUpdateButton(false);
    const updatedCard = { ...card, title };
    cardsCtx.updateCard(card.id, updatedCard);

    console.log(cardsCtx.cards);
  };

  const goBackeHandler = () => {
    history('/cards');
  };

  return (
    <section className={classes.card_body}>
      <div className={classes.card}>
        <div className={classes.card__info}>
          <img key={card.id} src={card.url} alt={card.title} />
          { !showUpdateButton && <p>{title}</p>}

          <form>
            <div className={classes.input_wrapper}>
              { showUpdateButton && <input type="text" value={title} onChange={titleChangeHandler} />}
            </div>
            <div className={classes.btns_wrapper}>
              { !showUpdateButton && (
                <button 
                  type='button' 
                  className={classes.btn_edit} 
                  onClick={titleEditHandler}
                >
                  Edit
                </button>
              )}
              { showUpdateButton && (
                <button 
                  type='button' 
                  className={classes.btn_edit} 
                  onClick={titleUpdateHandler}
                >
                  Update
                </button>
              )}
              <button 
                type='button' 
                className={classes.btn_back}
                onClick={goBackeHandler}
              >
                Go back
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default CardDetails;