import { SiReact, SiHtml5, SiCss3, SiJavascript, SiJquery, SiBootstrap, SiGithub, SiFigma } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Layout from "../components/Layout/Layout";

const techItems = [
    { name: "REACT", Icon: SiReact },
    { name: "HTML", Icon: SiHtml5 },
    { name: "CSS", Icon: SiCss3 },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "jQuery", Icon: SiJquery },
    { name: "Java", Icon: FaJava },
    { name: "Bootstrap", Icon: SiBootstrap },
    { name: "Git & GitHub", Icon: SiGithub },
    { name: "FIGMA", Icon: SiFigma }
];

function Techstack() {
    return (
        <Layout>
            <div className="max-w-[800px] max-md:max-w-[90%]">
                <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">My Tech Stack</h1>
                <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2">
                    {techItems.map((item, i) => (
                        <div key={i} className="bg-white rounded-[10px] shadow-[1px_4px_12px_rgba(0,0,0,0.1)] p-8 py-8 flex flex-col items-center justify-center gap-4">
                            <div className="text-gray-800 flex items-center justify-center">
                                <item.Icon size={40} />
                            </div>
                            <span className="text-base font-semibold text-gray-800">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Techstack;
