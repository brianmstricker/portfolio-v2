import Image from "next/image";
import me from "../../public/images/me-removebg-blue.png";
import { FiArrowRightCircle } from "react-icons/fi";

const MainSection = () => {
  return (
    <section
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-900"
    >
      <div className="mx-auto flex flex-col items-center justify-center h-full px-4 md:px-16 lg:flex-row">
        <div className="flex flex-col justify-center h-full lg:w-3/5 gap-4 ml-3 mt-16 lg:mt-3">
          <span className="hidden md:inline text-3xl text-gray-400">
            WELCOME
          </span>
          <h2 className="text-5xl sm:text-7xl font-bold">
            I&apos;m a Full Stack Developer
          </h2>
          <p className="text-lg lg:w-1/2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            repellendus quos quia iusto mollitia dolorem deserunt quis. Magni,
            qui fuga.
          </p>
          <button className="text-start w-fit px-4 py-2 bg-blue-500 rounded-xl flex items-center gap-1 text-lg">
            Projects
            <FiArrowRightCircle size={20} />
          </button>
        </div>
        <div className="max-sm:w-60 w-1/3 lg:w-1/4 pb-4 lg:pb-0">
          <Image
            className="rounded-2xl mx-auto"
            src={me}
            alt="me"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
export default MainSection;
