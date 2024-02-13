import { DUMMY_MEETUPS } from '..';
import MeetupDetails from '../../components/meetups/MeetupDetails';

function MeetupDetailsPage({ meetup }) {
  return <MeetupDetails {...meetup} />;
}
export default MeetupDetailsPage;

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  const meetup = DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);
  return { props: { meetup: meetup } };
}

export async function getStaticPaths() {
  const paths = DUMMY_MEETUPS.map((meetup) => ({
    params: {
      meetupId: meetup.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
