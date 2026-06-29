import Link from "next/link";

function page() {
  return (
    <div className=" text-black font-bold text-2xl">
      <div className="bg-amber-300 w-fit px-10 py-3.5 m-10">
        <Link href={"/settings/env"}>Env </Link>
      </div>
      <div className="bg-amber-300 w-fit px-10 py-3.5 m-10">
        <Link href={"/settings/teams"}>Teams </Link>
      </div>
    </div>
  );
}

export default page;
