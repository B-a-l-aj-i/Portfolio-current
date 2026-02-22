import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";

const experiences = [
    {
        date: "Jan 2025 - Apr 2025",
        title: "Frontend Engineer Intern",
        location: "Timeless Ventures, Chennai",
        bullets: [
            "Developed Dugout, an internal Slack viewer with Next.js, integrated Slack API to fetch and display messages from 30+ team members with OAuth authentication"
        ],
        visitUrl: null
    },
    {
        date: "May 2025 - Present",
        title: "Fullstack Engineer",
        location: "Timeless Ventures, Chennai",
        bullets: [
            "Built Recollect, a bookmarking app using Next.js, TypeScript, Node.js, and Supabase",
        ],
        visitUrl: null
    },
];

function Experience() {
    return (
        <Layout>
            <div className="w-full max-w-4xl mx-auto">

                {/* Timeline: spine grows top-to-bottom; dot + date next to spine, then card */}
                <div className="relative">
                    {/* Spine: grows from top to bottom */}
                    <motion.div
                        className="absolute top-0 bottom-0 w-px bg-green-100 left-[11px] md:left-1/2 md:-translate-x-px"
                        style={{ transformOrigin: "top" }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                        aria-hidden="true"
                    />

                    <ul className="list-none p-0 m-0 space-y-8 md:space-y-0">
                        {experiences.map((exp, i) => {
                            const isEven = i % 2 === 0;
                            const lineGrowthDuration = 0.9;
                            const segmentDelay = (i / Math.max(experiences.length - 1, 1)) * lineGrowthDuration * 0.7;
                            const dotDelay = 0.15 + segmentDelay;
                            const dateDelay = dotDelay + 0.08;
                            const cardDelay = dateDelay + 0.1;
                            return (
                                <motion.li
                                    key={i}
                                    className="relative md:flex md:items-center md:min-h-[140px] md:odd:flex-row md:even:flex-row-reverse md:pb-16 last:md:pb-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.01, delay: dotDelay }}
                                >
                                    {/* Dot + date next to spine (one group) */}
                                    <div className={`md:w-1/2 md:px-6 pl-0 md:flex md:items-center ${isEven ? "md:justify-end md:pr-4" : "md:justify-start md:pl-4"}`}>
                                        <div className="flex items-center gap-2 min-w-0">
                                            {/* Grey dot on spine */}
                                            <motion.div
                                                className="absolute left-[11px] top-2 w-[22px] h-[22px] rounded-full bg-gray-400 border-2 border-white shadow-sm -translate-x-1/2 md:left-1/2 md:-translate-x-[11px] shrink-0"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ type: "spring", stiffness: 280, damping: 22, delay: dotDelay }}
                                                aria-hidden="true"
                                            />
                                            {/* Date right next to dot */}
                                            <motion.span
                                                className="text-sm font-medium text-gray-600 ml-8 md:ml-6 shrink-0"
                                                initial={{ opacity: 0, x: -6 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: dateDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            >
                                                {exp.date}
                                            </motion.span>
                                        </div>
                                    </div>

                                    <div className={`md:w-[900px] md:px-6 pl-8 md:pl-6 mt-2 md:mt-0 md:flex ${isEven ? "md:justify-start md:pl-[200px]" : "md:justify-end md:pr-[200px]"}`}>
                                        <motion.article
                                            className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 relative"
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: cardDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
                                        >
                                            <h3 className="m-0 font-semibold text-gray-800 text-base">
                                                {exp.title}
                                                <span className="font-normal text-gray-500"> ({exp.location})</span>
                                            </h3>
                                            <ul className="mt-2 mb-0 pl-4 text-gray-600 text-sm leading-relaxed space-y-1 list-disc">
                                                {exp.bullets.map((bullet, j) => (
                                                    <li key={j}>{bullet}</li>
                                                ))}
                                            </ul>
                                            {exp.visitUrl && (
                                                <a
                                                    href={exp.visitUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-block mt-3 text-green-600 hover:text-green-800 font-medium text-sm no-underline"
                                                >
                                                    Visit &gt;
                                                </a>
                                            )}
                                        </motion.article>
                                    </div>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

export default Experience;
