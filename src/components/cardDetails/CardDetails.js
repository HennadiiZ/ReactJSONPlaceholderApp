import classes from './CardDetails.module.scss';
import { useContext, useState } from 'react';
import DataContext from '../../_store/data-context'; 

const CardDetails = (props) => {
  const cardsCtx = useContext(DataContext); 
 
  // const card = cardsCtx?.cards?.find(item => +item.id ===  +props.cardId); 

  const card = cardsCtx?.cards?.find(item => {
    console.log('item.id', item.id);
    console.log('props.cardId', props.cardId);
    return +item.id ===  +props.cardId
  }); 

  const [title, setTitle] = useState(card.title); // ---------
  const [showUpdateButton, setShowUpdateButton] = useState(false); // ---------

  const titleChangeHandler = (event) => {  // ---------
    setTitle(event.target.value);
  };

  const titleEditHandler = () => {
    setShowUpdateButton(true);
  };

  // const handleTitleUpdate = () => { // ---------
  //   axios
  //     .put(`https://jsonplaceholder.typicode.com/photos/${photo.id}`, {
  //       title: title,
  //     })
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.log(error));
  // };

  const titleUpdateHandler = () => {
    setShowUpdateButton(false);
    console.log('cardsssssss', cardsCtx?.cards);

    fetch(`https://jsonplaceholder.typicode.com/photos/${card.id}`, {
      method: "PUT",
      body: JSON.stringify({ title: title }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  // console.log('card', card);
  // console.log('cardsssssss', cardsCtx?.cards);

  return (
    <section className={classes.card_body}>
      <div className={classes.card}>
        <div className={classes.card__info}>
          <img key={card.id} src={card.url} alt={card.title} />
          { !showUpdateButton && <p>{title}</p>}

          <form>
            {/* <p>{card.title}</p> */}
            {/* <p>{title}</p> */}
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
              <button type='button' className={classes.btn_back}>Go back</button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default CardDetails;