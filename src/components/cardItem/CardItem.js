import classes from './CardItem.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../../_store/data-context'; 

const CardItem = (props) => {
  const cardsCtx = useContext(DataContext); 

  const deleteItemHandler = (e) => {
    e.preventDefault();
    cardsCtx.removeCard(props.id);
  };

  return (
    <li className={classes.card} key={props.id}>
      <Link to={`/cards/${props.id}`} className={classes.card__info}> 
        <img key={props.id} src={props.url} alt={props.title} />
        <div>
          <p>{props.title}</p>
        <div className={classes.btns_wrapper}>
          <button 
            type='button' 
            className={classes.btn}
            onClick={deleteItemHandler}
          >
            Delete
          </button>
        </div>
        </div>
      </Link>
    </li>
  );
};
  
export default CardItem;