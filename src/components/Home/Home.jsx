import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { motion } from "framer-motion";

function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="w-[350px] sm:max-w-[46%]">
          <motion.div
            className="flex flex-col items-center p-8 rounded-lg bg-white w-full h-full"
            initial={{ boxShadow: "0 0 0 0 rgba(0,0,0,0)" }}
            animate={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)" }}
            transition={{ duration: 1, ease: "anticipate" }}
            whileHover={{ boxShadow: "0 20px 60px -15px rgba(0,0,0,0.25)" }}
          >
            <img
              className="w-48 h-48 rounded-full object-cover max-md:w-32 max-md:h-32"
              alt="profile"
              src="/profilephoto.png"
            />
            <p className="mt-6 text-2xl font-semibold text-center">
              Balaji Mariappan
            </p>
            <span className="text-base font-light tracking-widest">
              Fullstack Engineer
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center gap-8 w-full sm:max-w-[54%] p-6 text-left">
          <header className="space-y-2">
            <p className="text-2xl font-medium tracking-wide text-gray-600 m-0">
              Hello
            </p>
            <h1 className="text-2xl font-semibold leading-tight m-0">
              Here's who I am & what I do
            </h1>
          </header>

          <p className="text-base font-normal leading-7 text-gray-700 m-0 max-w-prose">
            Fullstack Engineer at Timeless Ventures. with a strong passion for
            building clean and scalable web sites, skilled in React.js,
            Next.js, Prisma, Node.js, TypeScript, and Tailwind CSS. I enjoy
            finding solution for complex problems , and I'm always eager to
            learn and grow in a collaborative environment.
          </p>

          <div className="flex items-center gap-4">
            <button className="text-base font-medium text-black border border-black rounded-lg py-2 px-4 flex items-center justify-center cursor-pointer hover:bg-green-100 hover:text-green-800 hover:border-transparent">
            <a href="https://drive.google.com/file/d/1zDOYfutSdXKgYfBrfP8b4F_ehyWBGmwT/view?usp=drive_link" target="_blank" rel="noreferrer">Resume</a>
            </button>
            <Link to="/project">
              <button className="text-base font-medium text-black border border-black rounded-lg py-2 px-4 flex items-center justify-center cursor-pointer hover:bg-green-100 hover:text-green-800 hover:border-transparent">
                Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
