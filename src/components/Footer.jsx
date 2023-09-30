import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={""}
          alt="Founder"
        />

        <h2>Jasdeep Singh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/channel/UClpuJdGnpnCemnktfHiIjTQ" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/jasdeep_chaudhary/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Jasdeep30" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
