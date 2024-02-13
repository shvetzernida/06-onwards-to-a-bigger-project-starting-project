import MeetupList from '../components/meetups/MeetupList';

export const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is the first meetup!',
  },
  {
    id: 'm2',
    title: 'Second meetup',
    image:
      'https://lh3.googleusercontent.com/p/AF1QipMQ_urwoVK84i4xjjmau3l6L860bZmmP8F19rjz=s680-w680-h510',
    address: 'Some address 5, 12345 Some City',
    description: 'This is the second meetup!',
  },
  {
    id: 'm3',
    title: 'Third meetup',
    image: 'https://ychef.files.bbci.co.uk/1280x720/p05w6r6t.webp',
    address: 'Some address 5, 12345 Some City',
    description: 'This is the third meetup!',
  },
];

function HomePage({ meetups }) {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
}
export default HomePage;

export async function getStaticProps() {
  return { props: { meetups: DUMMY_MEETUPS }, revalidate: 10 };
}
