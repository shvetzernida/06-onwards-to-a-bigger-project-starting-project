import classes from './MeetupDetails.module.css';

function MeetupDetails(props) {
  const { title, image, address, description } = props ?? {};
  return (
    <div className={classes['details']}>
      <h1>{title}</h1>
      <img src={image} alt={title} className={classes['image']} />
      <address>{address}</address>
      <p>{description}</p>
    </div>
  );
}
export default MeetupDetails;
