import classes from './CardDetails.module.scss';
import { useContext } from 'react';
import DataContext from '../../_store/data-context'; 

const CardDetails = (props) => {
  const cardsCtx = useContext(DataContext); 
  // const card = cardsCtx?.cards?.find(item => +item.id ===  +props.cardId); 

  const card = cardsCtx?.cards?.find(item => {
    console.log('item.id', item.id);
    console.log('props.cardId', props.cardId);
    return +item.id ===  +props.cardId
  }); 

  console.log('card', card);

  return (
    <section className={classes.card_body}>
      <div className={classes.card}>
        <div className={classes.card__info}>
          <img key={card.id} src={card.url} alt={card.title} />
          <div>
            <p>{card.title}</p>
          </div>
          <div className={classes.card__btns}>
            <button className={classes.btn_edit}>Edit</button>
            <button className={classes.btn_back}>Go back</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardDetails;