import { useRouter } from "next/router";

function Meetupid() {
  const router = useRouter();
  const id = router.query.meetupid;

  return (
    <>
      {id && <h1>{id}</h1>}
      {!id && <h1>No Id Present</h1>}
    </>
  );
}
export default Meetupid;
