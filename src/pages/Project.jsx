import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Recollect",
        link: "#",
        image: "/recollect.png",
        desc: "Built Recollect, a bookmarking app using Next.js, TypeScript, Node.js, and Supabase.",
        tech: ["Next.js", "TypeScript", "Node.js", "Supabase"]
    },
    {
        title: "Dugout",
        link: "#",
        image: "/dugout.png",
        desc: "Developed Dugout, an internal Slack viewer with Next.js, integrated Slack API to fetch and display messages from 30+ team members with OAuth authentication.",
        tech: ["Next.js", "Slack API", "OAuth"]
    },
    {
        title: "Cryops",
        link: "https://cryops.vercel.app/",
        image: "/cryops.png",
        desc: "Built and launched a SaaS platform that auto-generates portfolio websites in under 5 minutes by pulling data from GitHub and LeetCode profiles.",
        tech: ["Next.js", "GitHub API", "LeetCode"]
    }
];

function Project() {
    return (
        <Layout>
            <div className="w-full max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <p className="text-sm text-gray-600 m-0">Here's all the projects i've worked on</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, i) => (
                        <motion.article
                            key={i}
                            className="hover:scale-105 transition-all duration-300 border border-gray-200 rounded-lg bg-white overflow-hidden flex flex-col"
                            initial={{ opacity: 0, y: 20, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full aspect-video object-cover border-b border-gray-200"
                            />
                            <div className="p-4 flex flex-col flex-1">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="m-0 font-semibold text-base text-gray-800">
                                        {project.title}
                                    </h3>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs font-medium text-gray-600 hover:text-black shrink-0"
                                    >
                                        Link →
                                    </a>
                                </div>
                                <p className="text-sm text-gray-600 leading-5 m-0 mb-3 flex-1">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((t, j) => (
                                        <span
                                            key={j}
                                            className="inline-flex items-center justify-center py-1 px-2.5 border border-gray-300 rounded-md text-xs"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Project;
