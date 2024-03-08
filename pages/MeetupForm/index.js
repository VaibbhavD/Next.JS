import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

function MeetupForm() {
  const router = useRouter();
  async function onAddMeetup(Meetupdata) {
    console.log(Meetupdata);
    const response = await fetch("/api/new-meetup-apis/", {
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
      <Head>
        <title>Add New Meetup</title>
        <meta
          name="dedcription"
          content="Add New Meetups for Konw everthing in all ive World!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
}
export default MeetupForm;
