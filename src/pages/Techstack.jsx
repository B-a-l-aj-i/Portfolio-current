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

// Frontend | Backend | State & Data | Tools & Platforms
// No names - icons only, grouped by region
const techGroups = [
    // Frontend: React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
    [
        { Name: "React", Icon: SiReact, color: "#61DAFB", top: "6%", left: "8%", size: 48, delay: 0, rotate: "-rotate-6" },
        { Name: "Next.js", Icon: SiNextdotjs, color: "#000000", top: "18%", left: "5%", size: 44, delay: 0.5 },
        { Name: "TypeScript", Icon: SiTypescript, color: "#3178C6", top: "12%", left: "22%", size: 46, delay: 0.2 },
        { Name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", top: "28%", left: "3%", size: 42, delay: 0.8 },
        { Name: "HTML5", Icon: SiHtml5, color: "#E34F26", top: "8%", left: "35%", size: 50, delay: 0.3 },
        { Name: "CSS3", Icon: SiCss3, color: "#1572B6", top: "24%", left: "28%", size: 48, delay: 0.6 },
        { Name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", top: "32%", left: "15%", size: 44, delay: 0.4 }
    ],
    // Backend: Node.js, Express.js, Supabase, Prisma
    [
        { Name: "Node.js", Icon: SiNodedotjs, color: "#339933", top: "10%", right: "12%", size: 52, delay: 0.1, rotate: "rotate-5" },
        { Name: "Express.js", Icon: SiExpress, color: "#000000", top: "22%", right: "5%", size: 46, delay: 0.7, rotate: "-rotate-6" },
        { Name: "Supabase", Icon: SiSupabase, color: "#3ECF8E", top: "6%", right: "28%", size: 48, delay: 0.4, rotate: "rotate-4" },
        { Name: "Prisma", Icon: SiPrisma, color: "#2D3748", top: "28%", right: "22%", size: 44, delay: 0.9, rotate: "-rotate-2" }
    ],
    // State & Data: Zustand (Redux as substitute - no Zustand icon), React Query
    [
        { Name: "Redux", Icon: SiRedux, color: "#764ABC", bottom: "28%", left: "12%", size: 50, delay: 0.3, rotate: "-rotate-5" },
        { Name: "React Query", Icon: SiReactquery, color: "#FF4154", bottom: "18%", left: "5%", size: 48, delay: 0.6, rotate: "rotate-7" }
    ],
    // Tools & Platforms: Git, GitHub, Vercel, Figma
    [
        { Name: "Git", Icon: SiGit, color: "#F05032", bottom: "8%", right: "18%", size: 46, delay: 0.2, rotate: "rotate-4" },
        { Name: "GitHub", Icon: SiGithub, color: "#181717", bottom: "22%", right: "8%", size: 50, delay: 0.5, rotate: "-rotate-6" },
        { Name: "Vercel", Icon: SiVercel, color: "#000000", bottom: "12%", right: "30%", size: 44, delay: 0.8, rotate: "rotate-3" },
        { Name: "Figma", Icon: SiFigma, color: "#F24E1E", bottom: "28%", right: "22%", size: 48, delay: 0.1, rotate: "-rotate-4" }
    ]
];

function Techstack() {
    return (
        <Layout>
            <div className="relative w-full max-w-5xl min-h-[75vh] mx-auto">
                {techGroups.flat().map((item, i) => {
                    const style = {
                        ...(item.top && { top: item.top }),
                        ...(item.bottom && { bottom: item.bottom }),
                        ...(item.left && { left: item.left }),
                        ...(item.right && { right: item.right }),
                        animationDelay: `${item.delay}s`
                    };
                    return (
                        <div
                            key={i}
                            className={`absolute animate-float opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-500`}
                            style={style}
                            title={item.Name}
                        >
                            <item.Icon size={item.size} color={item.color} />
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
}

export default Techstack;
