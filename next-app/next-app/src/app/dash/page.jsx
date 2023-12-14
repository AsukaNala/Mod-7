import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <p>
        This is the Dashboard. <br />
        <Link href="/">home</Link>.
      </p>
    </div>
  );
}
