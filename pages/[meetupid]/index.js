import { useRouter } from "next/router";

function Meetupid(props) {
  const router = useRouter();
  const id = router.query.meetupid;
  // const id = props.meetups.id;

  return (
    <>
      {id && <h1>{id}</h1>}
      {!id && <h1>No Id Present</h1>}
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "a1",
        },
      },
    ],
  };
}

export const getStaticProps = async (context) => {
  const id = context.params.meetupid;

  return {
    props: {
      meetups: {
        id: { id },
        title: "Third Meet",
        image:
          "https://www.hdwallpaper.nu/wp-content/uploads/2015/07/869c978552ff253563b883e6f808f066.jpg",
        address: "America",
      },
    },
  };
};
export default Meetupid;
