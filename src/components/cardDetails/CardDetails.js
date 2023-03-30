import classes from './CardDetails.module.scss';

const CardDetails = (props) => {

  return (
    <section className={classes.item__alert}>
      <div>
        <h3>No card found!</h3>
        <div className={classes.icon}>
         
        </div>
      </div>
    </section>
  );
}

export default CardDetails;