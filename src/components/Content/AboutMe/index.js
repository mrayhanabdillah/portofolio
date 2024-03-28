import Image from "next/image";
import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import "./style.css";

const AboutMe = () => {
  return (
    // <div className="absolute md:w-1/3 bg-slate-600 shadow-lg mx-6 mt-5 p-5 rounded-md text-white flex flex-col items-center">
    //   <div className="relative w-36 h-36 rounded-full">
    //     <Image
    //       src="/img/profpic.jpg"
    //       alt="Profile Picture"
    //       layout="fill"
    //       objectFit="cover"
    //       objectPosition="top"
    //     />
    //   </div>

    //   <h1 className="sm:text-3xl font-bold mt-4">M Rayhan Abdillah</h1>
    // </div>

    <div className="lg:grid lg:grid-cols-4 gap-4 my-4 mx-8 shadow-md">
      <div className="bg-gray-900 p-10 rounded-lg mt-32">
        <div className="flex items-center justify-center">
          <div className="relative w-44 h-44 rounded-full">
            <Image
              src="/img/profpic.jpg"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </div>
        <div className="flex justify-between mx-5 mt-3">
          <a href="https://www.instagram.com/mrayhanabdillah/" target="_blank">
            <FaInstagramSquare className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mrayhanabdillahh/"
            target="_blank"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://github.com/mrayhanabdillah" target="_blank">
            <FaGithubSquare className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="bg-gray-900 col-span-3 p-10 rounded-lg lg:mt-32">
        <h1 className="text-3xl font-bold">Hello!</h1>
        <h2 className="text-2xl font-bold">
          Nama Saya Muhammad Rayhan Abdillah
        </h2>
        <p className="mt-4">
          Seorang fresh graduate dari jurusan Sistem Informasi, khususnya dalam
          teknologi dan inovasi. Dengan keterampilan yang baik dalam
          pemrograman, analisis data, dan pengembangan sistem, saya siap untuk
          memberikan kontribusi positif dalam lingkungan kerja yang dinamis.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
