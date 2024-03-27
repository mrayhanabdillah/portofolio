import Image from "next/image";
import "./style.css";

const AboutMe = () => {
  return (
    <div className="absolute md:w-1/3 bg-slate-600 shadow-lg mx-6 mt-5 p-5 rounded-md text-white flex flex-col items-center">
      <div className="relative w-36 h-36 rounded-full">
        <Image
          src="/img/profpic.jpg"
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>

      <h1 className="sm:text-3xl font-bold mt-4">M Rayhan Abdillah</h1>
    </div>
  );
};

export default AboutMe;
