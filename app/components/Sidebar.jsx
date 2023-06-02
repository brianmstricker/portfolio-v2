import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="hidden md:flex top-[35%] left-0 fixed flex-col gap-4 px-3 bg-slate-600 py-6 ml-[-4px] rounded-tr-2xl rounded-br-2xl">
      <a className="flex items-center group gap-2" href="">
        <span className="hidden group-hover:block">Github</span>{" "}
        <BsGithub size={36} />
      </a>
      <a className="flex items-center group gap-2" href="">
        <span className="hidden group-hover:block">LinkedIn</span>{" "}
        <BsLinkedin size={36} />
      </a>
      <a className="flex items-center group gap-2" href="">
        <span className="hidden group-hover:block">Email</span>{" "}
        <FaEnvelope size={36} />
      </a>
    </div>
  );
};
export default Sidebar;
