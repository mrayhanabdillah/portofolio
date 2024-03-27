import Image from "next/image";
import bg from "/public/img/bg.jpg";

const Background = () => {
  return (
    <>
      <div className="">
        <Image
          src={bg}
          alt="..."
          layout="fill"
          objectFit="cover"
          quality={100}
        ></Image>
      </div>
    </>
  );
};

export default Background;
