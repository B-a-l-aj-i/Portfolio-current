import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/Layout/Layout";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            setStatus({ type: "error", message: "Email service not configured. Add VITE_EMAILJS_* env variables." });
            return;
        }
        setIsSubmitting(true);
        setStatus(null);

        emailjs
            .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
                publicKey: EMAILJS_PUBLIC_KEY
            })
            .then(
                () => {
                    setStatus({ type: "success", message: "Message sent!" });
                    formRef.current?.reset();
                },
                (error) => {
                    setStatus({ type: "error", message: error.text || "Failed to send. Please try again." });
                }
            )
            .finally(() => setIsSubmitting(false));
    };

    return (
        <Layout>
            <div className="w-full max-w-md mx-auto">
                <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">Send me a message!</h1>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="rounded-lg p-8 flex flex-col gap-5 border border-gray-300 bg-green-50"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="py-2.5 px-0 bg-transparent border-0 border-b border-gray-300/80 text-base font-[inherit] outline-none placeholder:text-gray-400 focus:border-gray-500 transition-colors"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className="py-2.5 px-0 bg-transparent border-0 border-b border-gray-300/80 text-base font-[inherit] outline-none placeholder:text-gray-400 focus:border-gray-500 transition-colors"
                    />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        required
                        className="py-2.5 px-0 bg-transparent border-0 border-b border-gray-300/80 text-base font-[inherit] resize-y outline-none placeholder:text-gray-400 focus:border-gray-500 transition-colors min-h-[80px]"
                        rows={4}
                    />
                    {status && (
                        <p
                            className={`text-sm m-0 ${
                                status.type === "success" ? "text-green-600" : "text-red-600"
                            }`}
                        >
                            {status.message}
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="ml-auto bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </Layout>
    );
}

export default Contact;
