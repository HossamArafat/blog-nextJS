import Link from "next/link";
import getPost from "../helpers/api";
import Card from "@/components/Card";

export default async function Blog() {
  const users = await getPost();
  return (
    <div className="">
      <h1 className="mb-0 text-3xl pt-25 font-extrabold leading-none tracking-tight text-gray-400 md:text-4xl lg:text-5xl text-center">Blog Page</h1>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 py-20">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <i className="fa-solid fa-newspaper"></i>
            <a href="#" className="font-semibold inline-block pl-2">
              BLog
            </a>
          </div>
          <a href="#">See All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {users.map((item, index) => (
                <Card user={item} key={index}/>
            ))}
        </div>
      </div>
    </div>
  );
}
