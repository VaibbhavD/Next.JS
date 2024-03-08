import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="dedcription" content="All New Meetups all over World" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export const getStaticProps = async () => {
  const Client = await MongoClient.connect(
    "mongodb+srv://vaibhavdhamanage12:FnNmAenYGVoZKLCK@cluster0.t5bx9cq.mongodb.net/Meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = Client.db();
  const mettupcollection = db.collection("Meetups");
  const meetups = await mettupcollection.find().toArray();

  Client.close();

  // res.status(201).json(result);

  return {
    props: {
      meetups: meetups.map((m) => ({
        title: m.title,
        image: m.image,
        address: m.address,
        id: m._id.toString(),
      })),
    },
    revalidate: 1,
  };
};
// export const getServerSideProps = async () => {
//   return {
//     props: {
//       meetups: Dummy_List,
//     },
//   };
// };

export default HomePage;
