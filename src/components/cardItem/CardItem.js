import classes from './CardItem.module.css';

const CardItem = (props) => {
  return (
    <li className={classes.card} key={props.id}>
       <img key={props.id} src={props.url} alt={props.title} />
       <div className={classes.card__inf}> 
         <p>{props.title}</p>
       </div>
    </li>
  );
};
  
export default CardItem;