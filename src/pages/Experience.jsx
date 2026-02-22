import Layout from "../components/Layout/Layout";

const experiences = [
    {
        date: "January 2019",
        title: "Journey Start",
        location: "Delhi",
        description: "Started my professional journey focusing on web development and building scalable applications. Gained foundational experience in full-stack technologies and agile workflows.",
        visitUrl: null
    },
    {
        date: "February 2019",
        title: "Nawabo ka Sehar",
        location: "Lucknow",
        description: "Worked on enterprise projects with a focus on React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions and improve development practices.",
        visitUrl: null
    },
    {
        date: "March 2019",
        title: "Devotional Place",
        location: "Prayagraj",
        description: "Led frontend initiatives and contributed to architectural decisions. Mentored junior developers and established coding standards for maintainable, accessible web applications.",
        visitUrl: null
    }
];

function Experience() {
    return (
        <Layout>
            <div className="w-full max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-2xl font-semibold text-gray-800 m-0 mb-2">Experience</h1>
                    <p className="text-sm text-gray-600 m-0">Here&apos;s where I&apos;ve worked and what I did</p>
                </div>

                {/* Timeline: relative container, spine in center on desktop, left on mobile */}
                <div className="relative">
                    {/* Spine: vertical line */}
                    <div
                        className="absolute top-0 bottom-0 w-px bg-green-100 md:left-1/2 md:-translate-x-px left-[11px]"
                        aria-hidden="true"
                    />

                    <ul className="list-none p-0 m-0 space-y-8 md:space-y-0">
                        {experiences.map((exp, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <li
                                    key={i}
                                    className="relative md:flex md:items-center md:min-h-[140px] md:odd:flex-row md:even:flex-row-reverse"
                                >
                                    {/* Desktop: one half for date pill, other for card. Mobile: date + card stacked with spine on left */}
                                    <div className="md:w-1/2 md:pr-8 md:pl-8 pl-10 md:flex md:justify-end md:odd:order-1 md:even:order-2 md:even:justify-start md:odd:justify-end">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            {/* Circle on spine */}
                                            <div className="absolute left-0 top-2 w-[22px] h-[22px] rounded-full bg-gray-200 border-2 border-white shadow-sm md:left-1/2 md:-translate-x-[11px]" />
                                            {/* Connector line to pill (visible on desktop as horizontal bar) */}
                                            <div className="hidden md:block w-4 h-0.5 bg-green-100 shrink-0" />
                                            <span className="inline-flex rounded-full bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 text-sm font-medium shrink-0">
                                                {exp.date}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="md:w-1/2 md:pl-8 md:pr-8 pl-10 mt-2 md:mt-0 md:flex md:odd:justify-start md:even:justify-end md:odd:order-2 md:even:order-1">
                                        <article className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 relative">
                                            <h3 className="m-0 font-semibold text-gray-800 text-base">
                                                {exp.title}
                                                <span className="font-normal text-gray-500"> ({exp.location})</span>
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mt-2 mb-3">
                                                {exp.description}
                                            </p>
                                            {exp.visitUrl && (
                                                <a
                                                    href={exp.visitUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-green-600 hover:text-green-800 font-medium text-sm no-underline"
                                                >
                                                    Visit &gt;
                                                </a>
                                            )}
                                        </article>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

export default Experience;
