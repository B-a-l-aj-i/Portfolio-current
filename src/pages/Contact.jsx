import { useState } from "react";
import Layout from "../components/Layout/Layout";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, description });
        alert("Message received! (Form submission is client-only for now)");
    };

    return (
        <Layout>
            <div className="w-full max-w-md mx-auto">
                <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">Send me a message!</h1>
                <form
                    onSubmit={handleSubmit}
                    className="rounded-lg p-8 flex flex-col gap-5 border border-gray-300 bg-yellow-50"
                >
                    <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="py-2.5 px-0 bg-transparent border-0 border-b border-gray-300/80 text-base font-[inherit] outline-none placeholder:text-gray-400 focus:border-gray-500 transition-colors"
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-2.5 px-0 bg-transparent border-0 border-b border-gray-300/80 text-base font-[inherit] outline-none placeholder:text-gray-400 focus:border-gray-500 transition-colors"
                    />
                    <textarea
                        placeholder="Your message"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="py-2.5 px-0 bg-transparent border-0 border-b border-gray-300/80 text-base font-[inherit] resize-y outline-none placeholder:text-gray-400 focus:border-gray-500 transition-colors min-h-[80px]"
                        rows={4}
                    />
                    <button
                        type="submit"
                        className="ml-auto bg-black text-white px-3 py-1 rounded-md cursor-pointer hover:bg-gray-800 transition-colors"
                    >
                        send
                    </button>
                </form>
            </div>
        </Layout>
    );
}

export default Contact;
