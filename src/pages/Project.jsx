import Layout from "../components/Layout/Layout";

const projects = [
    { title: "Cluster", link: "#", desc: "Created Cluster, a web app using React and Supabase, allowing users to share and engage with text-based information", tech: ["SUPABASE", "JavaScript", "CSS", "HTML", "REACT"], previewType: null },
    { title: "where-Am-i", link: "#", desc: "Determine and exhibit your present geographical location, including city and country details", tech: ["JavaScript", "CSS", "HTML"], previewType: null },
    { title: "Find-Images", link: "#", desc: "Conduct a thorough search for imagery across our website to enhance visual content engagement.", tech: ["React", "JavaScript", "CSS", "HTML"], previewType: "find-images" },
    { title: "Expense-Tracker", link: "#", desc: "Monitor and manage your expenses with our integrated tracking and budgeting tool.", tech: ["OOPS", "JavaFx", "Java"], previewType: "expense-tracker" }
];

function ProjectPreview({ type }) {
    if (type === "find-images") {
        return (
            <div className="mb-4 rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-4">
                    <input type="text" placeholder="cars" readOnly className="w-full py-2 px-4 rounded-[20px] border border-gray-300 bg-white text-sm" />
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        {[1, 2, 3, 4].map((i) => <div key={i} className="aspect-square bg-gray-300 rounded" />)}
                    </div>
                </div>
            </div>
        );
    }
    if (type === "expense-tracker") {
        return (
            <div className="mb-4 rounded-lg overflow-hidden bg-[#2d2d2d] text-gray-400 p-4 font-mono text-sm">
                <div>
                    <div>1.add Expense</div>
                    <div>2.remove expense</div>
                    <div>3.view Expense</div>
                    <div>4.Generate Report</div>
                    <div>5.exit</div>
                </div>
                <div className="mt-2 py-2 px-2 bg-[#3d3d3d] rounded text-center text-xs">PieChart</div>
            </div>
        );
    }
    return null;
}

function Project() {
    return (
        <Layout>
            <div className="flex flex-col max-w-full max-md:max-w-[90%]">
                <div className="max-w-full">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold m-0 mb-2 text-gray-800">Projects</h1>
                        <p className="text-base font-normal m-0 text-gray-600">Here are my portfolio projects</p>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-6 max-md:grid-cols-1">
                        {projects.map((project, i) => (
                            <div key={i} className="p-6 border border-gray-300 rounded-[10px] bg-white shadow-[1px_4px_12px_rgba(0,0,0,0.08)] flex flex-col">
                                {project.previewType && <ProjectPreview type={project.previewType} />}
                                <div className="flex-1">
                                    <h3 className="m-0 mb-2 font-semibold text-lg flex items-center justify-between gap-2">
                                        {project.title}
                                        <a href={project.link} target="_blank" rel="noreferrer" className="py-1.5 px-3 bg-[rgb(70,70,255)] text-white rounded-[20px] no-underline text-sm font-medium hover:opacity-90">
                                            Link
                                        </a>
                                    </h3>
                                    <p className="my-2 font-light leading-6 text-base">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {project.tech.map((t, j) => (
                                            <span key={j} className="py-1.5 px-3 bg-[rgb(70,70,255)] text-white rounded text-sm font-medium">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Project;
