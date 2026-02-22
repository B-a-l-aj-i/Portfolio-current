import { SiLinkedin, SiGithub } from "react-icons/si";

function Layout({ children }) {
    return (
        <main className="relative min-h-screen flex flex-col">
            <div className="flex-1 flex items-center justify-center w-full px-4 py-8">
                {children}
            </div>
            <footer className="mt-auto bg-white h-16 w-full max-md:hidden">
                <div className="flex justify-evenly items-center">
                    <div className="flex flex-col">
                        <p className="m-0 mb-1 font-bold">Call</p>
                        <p className="m-0">+91 8015219775</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-0 mb-1 font-bold">Write</p>
                        <p className="m-0">connectbalajidev@gmail.com</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-0 mb-1 font-bold">Follow</p>
                        <div className="flex items-center gap-2 m-0">
                            <a href="https://www.linkedin.com/in/bal-aj-i" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <SiLinkedin size={20} color="#0A66C2" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <SiGithub size={20} color="#181717" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Layout;
