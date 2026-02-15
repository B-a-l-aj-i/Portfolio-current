import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiSupabase,
    SiPrisma,
    SiRedux,
    SiReactquery,
    SiGit,
    SiGithub,
    SiVercel,
    SiFigma
} from "react-icons/si";
import Layout from "../components/Layout/Layout";

const techItems = [
    { Name: "React", Icon: SiReact, color: "#61DAFB", left: "8%", top: "12%", size: 48 },
    { Name: "Next.js", Icon: SiNextdotjs, color: "#000000", left: "5%", top: "22%", size: 44 },
    { Name: "TypeScript", Icon: SiTypescript, color: "#3178C6", left: "22%", top: "15%", size: 46 },
    { Name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", left: "3%", top: "32%", size: 42 },
    { Name: "HTML5", Icon: SiHtml5, color: "#E34F26", left: "35%", top: "10%", size: 50 },
    { Name: "CSS3", Icon: SiCss3, color: "#1572B6", left: "28%", top: "28%", size: 48 },
    { Name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", left: "15%", top: "36%", size: 44 },
    { Name: "Node.js", Icon: SiNodedotjs, color: "#339933", left: "78%", top: "14%", size: 52 },
    { Name: "Express.js", Icon: SiExpress, color: "#000000", left: "85%", top: "26%", size: 46 },
    { Name: "Supabase", Icon: SiSupabase, color: "#3ECF8E", left: "72%", top: "8%", size: 48 },
    { Name: "Prisma", Icon: SiPrisma, color: "#2D3748", left: "68%", top: "32%", size: 44 },
    { Name: "Redux", Icon: SiRedux, color: "#764ABC", left: "12%", top: "58%", size: 50 },
    { Name: "React Query", Icon: SiReactquery, color: "#FF4154", left: "5%", top: "68%", size: 48 },
    { Name: "Git", Icon: SiGit, color: "#F05032", left: "72%", top: "78%", size: 46 },
    { Name: "GitHub", Icon: SiGithub, color: "#181717", left: "82%", top: "64%", size: 50 },
    { Name: "Vercel", Icon: SiVercel, color: "#000000", left: "60%", top: "74%", size: 44 },
    { Name: "Figma", Icon: SiFigma, color: "#F24E1E", left: "68%", top: "58%", size: 48 }
];

const popDelays = [0, 0.9, 0.35, 1.4, 0.5, 1.1, 0.25, 1.6, 0.7, 0.15, 1.3, 0.55, 1.0, 0.45, 1.5, 0.3, 0.95];
const floatDelays = [0, -1.2, -2.4, -0.6, -2.0, -1.0, -3.0, -0.4, -2.6, -1.6, -0.8, -2.2, -1.1, -2.8, -0.2, -2.3, -1.4];

function Techstack() {
    return (
        <Layout>
            <div className="relative w-full max-w-4xl min-h-[75vh] mx-auto overflow-hidden">
                {techItems.map((item, i) => (
                    <div
                        key={i}
                        className="absolute flex items-center justify-center animate-pop-in"
                        style={{
                            left: item.left,
                            top: item.top,
                            width: item.size,
                            height: item.size,
                            animationDelay: `${popDelays[i]}s`
                        }}
                        title={item.Name}
                    >
                        <div
                            className="flex items-center justify-center animate-float opacity-90 hover:opacity-100 transition-opacity"
                            style={{ animationDelay: `${floatDelays[i]}s` }}
                        >
                            <item.Icon size={item.size} color={item.color} />
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default Techstack;
