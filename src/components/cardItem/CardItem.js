import classes from './CardItem.module.css';

const CardItem = (props) => {
  return (
    <li className="card" key={props.id}>
       <img key={props.id} src={props.url} alt={props.title} />
   
       <div className="card__info"> 
         <p>{props.title}</p>
       </div>
    

  </li>
  );
};
  
export default CardItem;