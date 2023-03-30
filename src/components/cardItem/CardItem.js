import classes from './CardItem.module.scss';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
  return (
    // <li className={classes.card} key={props.id}>
    //    <div className={classes.card__info}> 
    //     <img key={props.id} src={props.url} alt={props.title} />
    //     <div>
    //       <p>{props.title}</p>
    //     </div>
    //    </div>
    // </li>


    // <Link to={`/cities/${props.id}`} className={classes.link}>  
    <li className={classes.card} key={props.id}>
      <Link to={`/cards/1`} className={classes.card__info}> 
        <img key={props.id} src={props.url} alt={props.title} />
        <div>
          <p>{props.title}</p>
        </div>
      </Link>
    </li>
  );
};
  
export default CardItem;