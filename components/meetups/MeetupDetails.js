import Image from "next/image";
import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
  const { title, image, address, description } = props ?? {};
  return (
    <div className={classes["details"]}>
      <h1>{title}</h1>
      <div className={classes["image-container"]}>
        <Image src={image} alt={title} className={classes["image"]} fill />
      </div>
      <address>{address}</address>
      <p>{description}</p>
    </div>
  );
}
export default MeetupDetails;
