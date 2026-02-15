function Layout({ children }) {
    return (
        <main className="relative min-h-screen flex flex-col">
            <div className="flex-1 flex items-center justify-center w-full px-4 py-8">
                {children}
            </div>
            <footer className="mt-auto bg-white h-16 w-full">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
                                    <path fill="black" fillRule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803" clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
                                    <path fill="black" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Layout;
