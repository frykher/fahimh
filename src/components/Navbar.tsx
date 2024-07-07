import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-center md:justify-end pb-2 items-center sticky bg-background top-0">
      <Link className="mr-4 mt-4" href="#about">
        <h2 className="m-0">about</h2>
      </Link>
      {/* <Link className="mr-4 mt-4" href="#projects">
            <h2 className="m-0">experience</h2>
        </Link> */}
      <Link className="mr-4 mt-4" href="#projects">
        <h2 className="m-0">projects</h2>
      </Link>
      <Link className="mr-4 mt-4" target="_blank" href="/resume.pdf">
        <h2 className="m-0">resume</h2>
      </Link>
      <a className="mr-4 mt-4" target="_blank" href="https://github.com/frykher">
        <h2 className="m-0 text-2xl">
          <FaGithub />
        </h2>
      </a>
      <a className="mr-4 mt-4" target="_blank" href="https://www.linkedin.com/in/fahim-hussain-1723431b2/">
        <h2 className="m-0 text-2xl">
          <FaLinkedin />
        </h2>
      </a>
      <a className="mr-4 mt-4" target="_blank" href="mailto:fahimhussain21@gmail.com">
        <h2 className="m-0 text-2xl">
          <FaEnvelope />
        </h2>
      </a>
    </div>
  );
}
