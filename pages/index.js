import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export const getStaticProps = async () => {
  const Client = await MongoClient.connect(
    "mongodb+srv://vaibhavdhamanage12:3zI0rEai6QuMopaZ@cluster0.t5bx9cq.mongodb.net/Meetups?retryWrites=true&w=majority&appName=Cluster0"
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
