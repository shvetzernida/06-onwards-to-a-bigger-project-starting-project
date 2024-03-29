import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { getAllMeetups } from '../db';

function HomePage({ meetups }) {
  return (
    <>
      <Head>
        <title>Meetups everywhere!</title>
        <meta name='description' content='Cool meetups with react community!' />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}
export default HomePage;

export async function getStaticProps() {
  const response = (await getAllMeetups()) ?? [];
  const meetups = response.map((meetup) => {
    meetup.id = meetup._id.toString();
    delete meetup._id;
    return meetup;
  });
  return { props: { meetups }, revalidate: 10 };
}
