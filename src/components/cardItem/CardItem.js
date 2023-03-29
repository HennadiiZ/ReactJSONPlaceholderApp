import classes from './CardItem.module.css';

const CardItem = (props) => {
  return (
    <li className={classes.card} key={props.id}>
       <div className={classes.card__info}> 
        <img key={props.id} src={props.url} alt={props.title} />
        <div>
          <p>{props.title}</p>
        </div>
       </div>
    </li>
  );
};
  
export default CardItem;



// here is my sollution^ however I need them to be adaptive for all screens but keep all cards the same size. Now some of them bigger than others

// <li className={classes.card} key={props.id}>
// <div className={classes.card__info}> 
//  <img key={props.id} src={props.url} alt={props.title} />
//  <div>
//    <p>{props.title}</p>
//  </div>
// </div>
// </li>


// .card {
//     min-width: 300px;
//     background-color: #f5f5f5;
  
//     flex: 1;
//     padding: 1rem;
//     box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
//     display: flex;
//     flex-direction: column;
//   }
  
//   .card__info {
//     min-width: 200px;
//     max-width: 100%;
//     background-color: #999999;
  
//     flex: 1;
//     padding: 1rem;
//     box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
//     display: flex;
//     flex-direction: column;
//   }
  
  
//   @media (max-width: 768px) {
//     .card {
//       flex: 0 1 100%;
//     }
    
//     .card img {
//       width: 100%;
//       height: auto;
//     }
//   }
  
//   @media (max-width: 365px) {  
//     .card img {
//       width: 100%;
//       max-width: 100%;
//       height: auto;
//     }
//   }