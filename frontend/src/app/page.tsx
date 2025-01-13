import Link from "next/link";


export default function Home() {
  return (
    <div className="m-5">
      <Link href="/students">
        Students
      </Link>
      <br />
      <Link href="/payments">
        Payments
      </Link>
    </div>
  );
}
