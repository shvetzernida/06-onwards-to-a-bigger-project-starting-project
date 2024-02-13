import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function onAddMeetup(meetup) {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      console.log("onAddMeetup data:", responseData);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>NewMeetupPage</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
}
export default NewMeetupPage;
