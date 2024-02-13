import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  async function onAddMeetup(meetup) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await response.json();
    console.log('data:', responseData);
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>NewMeetupPage</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
}
export default NewMeetupPage;
