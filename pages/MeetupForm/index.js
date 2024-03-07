import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function MeetupForm() {
  const router = useRouter();
  async function onAddMeetup(Meetupdata) {
    const response = await fetch("api/new-meetup-apis/", {
      method: "POST",
      body: JSON.stringify(Meetupdata),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
}
export default MeetupForm;
