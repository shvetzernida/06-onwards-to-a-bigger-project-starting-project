import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';

function NewMeetupPage() {
  const router = useRouter();

  async function onAddMeetup(meetup) {
    try {
      const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();
      console.log('onAddMeetup data:', responseData);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Add new meetup</title>
        <meta name='description' content='Add your event!' />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
}
export default NewMeetupPage;
