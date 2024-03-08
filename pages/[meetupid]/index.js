import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "@/components/meetups/MeetupDetail";

function Meetupid(props) {
  return (
    <>
      <MeetupDetail
        title={props.meetups.title}
        image={props.meetups.image}
        address={props.meetups.address}
        description={props.meetups.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const Client = await MongoClient.connect(
    "mongodb+srv://vaibhavdhamanage12:FnNmAenYGVoZKLCK@cluster0.t5bx9cq.mongodb.net/Meetups?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = Client.db();

  const MeetupCollection = db.collection("Meetups");
  const meetups = await MeetupCollection.find({}, { _id: 1 }).toArray();
  Client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}

export const getStaticProps = async (context) => {
  const id = context.params.meetupid;
  const Client = await MongoClient.connect(
    "mongodb+srv://vaibhavdhamanage12:FnNmAenYGVoZKLCK@cluster0.t5bx9cq.mongodb.net/Meetups?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = Client.db();

  const MeetupCollection = db.collection("Meetups");
  const Selectmeetup = await MeetupCollection.findOne({
    _id: new ObjectId(id),
  });
  Client.close();

  return {
    props: {
      meetups: {
        title: Selectmeetup.title,
        image: Selectmeetup.image,
        address: Selectmeetup.address,
        description: Selectmeetup.description,
        id: Selectmeetup._id.toString(),
      },
    },
  };
};
export default Meetupid;
