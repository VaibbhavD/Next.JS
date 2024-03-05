import { useParams } from "next/navigation";
import { useRouter } from "next/router";

const Devlopers = [
  { id: "1", name: "Yash", role: "Senior Developer" },
  { id: "2", name: "Vaibhav", role: "Backend Developer" },
  { id: "3", name: "Suresh", role: "Frontend Developer" },
];
function Devloper() {
  const param = useParams();
  const router = useRouter();

  const id = router.query.devloper;
  console.log(id);

  const developer = Devlopers.find((d) => d.id === id);

  return (
    <>
      {developer && (
        <>
          <h3>{developer.name}</h3>
          <h4>{developer.role}</h4>
        </>
      )}
      {/* <h2>Hi</h2> */}
    </>
  );
}

export default Devloper;
