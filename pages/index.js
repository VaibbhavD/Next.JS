import MeetupList from "@/components/meetups/MeetupList";

const Dummy_List = [
  {
    id: "a1",
    title: "First Meet",
    image: "https://wallpaperaccess.com/full/1137443.jpg",
    address: "New York ",
  },
  {
    id: "a2",
    title: "Second Meet",
    image:
      "https://www.tripsavvy.com/thmb/aQu3cON2Y7jiaR74d_5s8ZOyvtw=/3600x2398/filters:fill(auto,1)/GettyImages-859451446-a27a2e17ac3640bdb36179083e7b6818.jpg",
    address: "Paries",
  },
  {
    id: "a3",
    title: "Third Meet",
    image:
      "https://www.hdwallpaper.nu/wp-content/uploads/2015/07/869c978552ff253563b883e6f808f066.jpg",
    address: "America",
  },
];

function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      meetups: Dummy_List,
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
