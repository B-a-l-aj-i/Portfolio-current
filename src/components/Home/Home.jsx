import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import pic from "../Home/unnamed.png";

function Home() {
    return (
        <Layout>
            <div className="absolute left-[19%] top-[25%] flex max-w-[800px] mx-auto max-md:flex-col max-md:left-[5%] max-md:max-w-[90%] max-md:gap-5">
                <div className="rounded-[10px] shadow-[1px_8px_22px_rgb(136,136,136)] max-w-[46%] pl-[9%] pr-[8%] flex flex-col items-center object-contain bg-[rgb(244,236,230)] max-md:max-w-full max-md:pb-[7%]">
                    <div><img className="mt-8 rounded-full max-md:w-[120px] max-md:h-[120px]" alt="profile" src={pic} width={200} height={200} /></div>
                    <div className="text-center">
                        <p className="text-[2rem] font-[690] mt-0.5">Balaji<br />Mariappan</p>
                    </div>
                    <div className="w-[100px] h-px bg-blue-600" />
                    <span className="font-extralight text-[1.2rem] tracking-[0.3rem] mt-5">FrontendDeveloper</span>
                </div>

                <div className="max-w-[53%] flex flex-col justify-evenly py-[2%] px-[4%] font-bold max-md:max-w-full">
                    <div>
                        <p className="m-0">Hello</p>
                        <p className="mt-4 text-[1.5rem] font-semibold">Here's who I am & what I do</p>
                    </div>

                    <div className="mt-5 flex items-center gap-2">
                        <button className="text-black text-base border border-black rounded-[40px] py-[2%] px-[7%] cursor-pointer hover:bg-[rgb(70,70,255)] hover:transition-[0.7s] hover:text-white hover:border-none">
                            Resume
                        </button>
                        <Link to="/project">
                            <button className="text-black text-base border border-black rounded-[40px] py-[2%] px-[7%] cursor-pointer hover:bg-[rgb(70,70,255)] hover:transition-[0.7s] hover:text-white hover:border-none">
                                Projects
                            </button>
                        </Link>
                    </div>

                    <div className="leading-[25px] mt-8 mb-8 text-[1.1rem] font-light">
                        I am an aspiring Frontend developer with a passion for creating user-friendly websites
                        and I am quite familiar wire I can leverage my skills and implement my knowledge in the real world
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
