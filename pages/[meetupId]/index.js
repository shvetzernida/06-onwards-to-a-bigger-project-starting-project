import MeetupDetails from "../../components/meetups/MeetupDetails";
import { getAllMeetupsId, getMeetup } from "../../db";

function MeetupDetailsPage({ meetup }) {
  return <MeetupDetails {...meetup} />;
}
export default MeetupDetailsPage;

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  const meetup = await getMeetup(meetupId);
  meetup.id = meetup._id.toString();
  delete meetup._id;
  return { props: { meetup }, revalidate: 30 };
}

export async function getStaticPaths() {
  const response = await getAllMeetupsId();
  const meetups = response.map((meetup) => {
    meetup.id = meetup._id.toString();
    delete meetup._id;
    return meetup;
  });

  const paths = meetups.map((meetup) => ({
    params: {
      meetupId: meetup.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
