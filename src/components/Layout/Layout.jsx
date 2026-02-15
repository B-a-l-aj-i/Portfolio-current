function Layout({ children }) {
    return (
        <main className="relative min-h-screen flex flex-col">
            {children}
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
                        <p className="m-0">
                            <a href="https://www.linkedin.com/in/balaji-m-400bb4249/" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
                                    <path fill="black" fillRule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803" clipRule="evenodd"/>
                                </svg>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Layout;
