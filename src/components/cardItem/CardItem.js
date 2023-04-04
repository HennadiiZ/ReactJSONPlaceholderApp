import classes from './CardItem.module.scss';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
  return (
    <li className={classes.card} key={props.id}>
      <Link to={`/cards/${props.id}`} className={classes.card__info}> 
        <img key={props.id} src={props.url} alt={props.title} />
        <div>
          <p>{props.title}</p>
        </div>
      </Link>
    </li>
  );
};
  
export default CardItem;