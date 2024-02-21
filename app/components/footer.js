import csslogo from "../../public/img/w3_css-ar21.svg";
import htmllogo from "../../public/img/w3_html5-ar21.svg";
import javalogo from "../../public/img/javascript-ar21.svg";
import reactlogo from "../../public/img/reactjs-ar21.svg";
import nextlogo from "../../public/img/nextjs-13.svg";
import tailwindlogo from "../../public/img/tailwindcss-ar21.svg";
import nodelogo from "../../public/img/nodejs-ar21.svg";
import postgreslogo from "../../public/img/postgresql-ar21.svg";
import gitlogo from "../../public/img/git-scm-ar21.svg";
import mysqllogo from "../../public/img/mysql-ar21.svg";
import firebaselogo from "../../public/img/firebase-ar21.svg";
import mongodblogo from "../../public/img/mongodb-ar21.svg"

import Image from "next/image";
import {
  FaFileImport,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-white">
      <div className="py-10 w-3/5 mx-auto exoverflow-hidden whitespace-nowrap logo-container carousel-fade-container">
        <div className="logos">
          <Image src={csslogo} height={50} width={100}></Image>
          <Image src={htmllogo} height={50} width={100}></Image>
          <Image src={javalogo} height={50} width={100}></Image>
          <Image src={reactlogo} height={50} width={100}></Image>
          <Image src={nextlogo} height={50} width={100}></Image>
          <Image src={tailwindlogo} height={50} width={100}></Image>
          <Image src={nodelogo} height={50} width={100}></Image>
          <Image src={postgreslogo} height={50} width={100}></Image>
          <Image src={gitlogo} height={50} width={100}></Image>
          <Image src={mysqllogo} height={50} width={100}></Image>
          <Image src={firebaselogo} height={50} width={100}></Image>
          <Image src={mongodblogo} height={50} width={100}></Image>
        </div>
        <div className="logos">
          <Image src={csslogo} height={50} width={100}></Image>
          <Image src={htmllogo} height={50} width={100}></Image>
          <Image src={javalogo} height={50} width={100}></Image>
          <Image src={reactlogo} height={50} width={100}></Image>
          <Image src={nextlogo} height={50} width={100}></Image>
          <Image src={tailwindlogo} height={50} width={100}></Image>
          <Image src={nodelogo} height={50} width={100}></Image>
          <Image src={postgreslogo} height={50} width={100}></Image>
          <Image src={gitlogo} height={50} width={100}></Image>
          <Image src={mysqllogo} height={50} width={100}></Image>
          <Image src={firebaselogo} height={50} width={100}></Image>
          <Image src={mongodblogo} height={50} width={100}></Image>
        </div>
      </div>
      <div className="flex justify-center space-x-4 p-4">
        <div className="flex flex-row gap-3 border-t-2 py-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-black text-3xl" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-black text-3xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-black text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
