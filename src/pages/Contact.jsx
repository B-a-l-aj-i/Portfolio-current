import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";

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
        const emailInput = formRef.current?.elements?.namedItem?.("email");
        const email = emailInput?.value?.trim() ?? "";
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!isValidEmail) {
            setStatus({ type: "error", message: "Invalid email. Message not sent." });
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
            <motion.div
                className="w-full max-w-lg lg:max-w-2xl mx-auto"
                initial={{ boxShadow: "0 0 0 0 rgba(0,0,0,0)" }}
                animate={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ boxShadow: "0 20px 60px -15px rgba(0,0,0,0.25)" }}
            >
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="rounded-lg p-8 flex flex-col gap-5 shadow-sm max-h-full bg-[#f8f9fa]"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="py-2.5 px-0 bg-transparent border-0 border-b border-gray-900 text-base font-[inherit] outline-none placeholder:text-gray-400 focus:border-gray-500 transition-colors"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className="py-2.5 px-0 bg-transparent border-0 border-b border-gray-900 text-base font-[inherit] outline-none placeholder:text-gray-400 focus:border-gray-500 transition-colors"
                    />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        required
                        className="py-2.5 px-0 bg-transparent border-0 border-b border-gray-900 text-base font-[inherit] resize-y outline-none placeholder:text-gray-400 focus:border-gray-500 transition-colors min-h-[80px]"
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
                        className="ml-auto text-base font-medium text-black border border-black rounded-lg py-2 px-4 flex items-center justify-center cursor-pointer hover:bg-green-100 hover:text-green-800 hover:border-transparent"
                    >
                        {isSubmitting ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>
        </Layout>
    );
}

export default Contact;
