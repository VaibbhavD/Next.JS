import Link from "next/link";

const Devlopers = [
  { id: "1", name: "Yash", role: "Senior Developer" },
  { id: "2", name: "Vaibhav", role: "Backend Developer" },
  { id: "3", name: "Suresh", role: "Frontend Developer" },
];
function Devloper() {
  return (
    <ul className="flex justify-center">
      {Devlopers.map((d) => (
        <li className="font-bold">
          <Link href={`/AboutUs/Devloper/${d.id}`}>
            <h2>Name: {d.name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Devloper;
