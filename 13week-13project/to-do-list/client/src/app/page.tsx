import Image from "next/image";
import Link from "next/link";
import { GiNotebook } from "react-icons/gi";
import { SlNotebook } from "react-icons/sl";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center bg-background text-brand overflow-hidden">
      <div className="max-w-[1280px] w-full relative">
        <div className="w-full">
          <ul className="flex items-center justify-between w-full px-6 py-4">
            <li>
              <h1 className="font-semibold text-2xl flex">
                <GiNotebook className="mr-2 font-light" />
                To Doos
              </h1>
            </li>
            <li>
              <div className="flex items-center justify-center gap-3">
                <Link
                  href={"/auth/login"}
                  className="px-5 py-2 font-thin text-sm border-1 border-primary rounded-md cursor-pointer hover:bg-primary hover:text-slate-100 ease duration-200"
                >
                  Log in
                </Link>
                <Link
                  href={"/auth/signup"}
                  className="px-5 py-2 font-thin text-sm rounded-md cursor-pointer hover:bg-primary/25 text-primary ease duration-200"
                >
                  Sign up
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full h-full flex items-center justify-around">
          <div className="w-full h-full flex justify-center items-centers relative">
            <div className="max-w-[400px] h-[350px] absolute top-50 left-50">
              <h1 className="font-semibold">
                Capture Ideas, Organize Thoughts, Achieve More
              </h1>
              <h2 className="text-sm text-end">
                – All in One Place with To Doos!
              </h2>
              <p className="text-sm font-thin leading-5 mt-4">
                Welcome to To Doos – your ultimate note-taking companion!
                Whether you're brainstorming ideas, organizing tasks, or saving
                quick thoughts, our intuitive platform makes it effortless. Stay
                productive, never forget a detail, and bring your ideas to
                life—all in one seamless place. Start jotting today!
              </p>
            </div>
            <div className="max-w-[350px] h-[350px] absolute top-50 right-50">
              <SlNotebook className="w-full text-9xl text-start bg-transparent ease duration-300 hover:rotate-z-[-15deg] animate-" />
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-0 left-0 py-2 bg-primary">
          <p className="text-xs font-thin text-center text-slate-200 italic">
            &#169; To doos | Tufan Rai
          </p>
        </div>
      </div>
    </div>
  );
}
