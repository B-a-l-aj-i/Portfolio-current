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
            <div className="absolute left-[19%] top-[25%] max-w-[600px] p-8 max-md:left-[5%] max-md:max-w-[90%]">
                <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">Send me a message!</h1>
                <form onSubmit={handleSubmit} className="border border-gray-800 rounded-lg p-8 bg-white flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Enter-your-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="py-3 border-0 border-b border-gray-300 text-base font-[inherit] outline-none placeholder:text-gray-500"
                    />
                    <input
                        type="email"
                        placeholder="Enter-your-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-3 border-0 border-b border-gray-300 text-base font-[inherit] outline-none placeholder:text-gray-500"
                    />
                    <textarea
                        placeholder="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="py-3 border border-gray-300 rounded text-base font-[inherit] resize-y outline-none placeholder:text-gray-500"
                        rows={4}
                    />
                    <button type="submit" className="py-3 px-8 bg-[rgb(70,70,255)] text-white border-0 rounded text-base font-semibold cursor-pointer self-center hover:bg-[rgb(50,50,220)]">
                        Submit
                    </button>
                </form>
            </div>
        </Layout>
    );
}

export default Contact;
