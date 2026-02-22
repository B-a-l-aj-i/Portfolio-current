import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiX } from "react-icons/hi";

const navLinkClass = ({ isActive }) =>
  `block w-full text-left no-underline py-3 px-4 rounded-md text-base ${
    isActive ? "bg-green-100 text-green-800" : "text-inherit hover:bg-green-100 hover:text-green-800"
  }`;

function BottomSheet({ isOpen, onClose }) {
  const handleNavClick = () => onClose();

  const content = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            role="presentation"
            className="fixed inset-0 bg-black/40 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed bottom-0 left-0 right-0 z-[101] bg-white rounded-t-2xl shadow-lg max-h-[70vh] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            <div className="sticky top-0 bg-white flex justify-end p-3 rounded-t-2xl border-b border-gray-100">
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
                aria-label="Close menu"
              >
                <HiX size={24} />
              </button>
            </div>
            <div className="px-4 pb-6 pt-2">
              <nav className="flex flex-col gap-1 mb-6">
                <NavLink to="/" end className={navLinkClass} onClick={handleNavClick}>
                  Home
                </NavLink>
                <NavLink to="/techstack" className={navLinkClass} onClick={handleNavClick}>
                  Techstack
                </NavLink>
                <NavLink to="/project" className={navLinkClass} onClick={handleNavClick}>
                  Project
                </NavLink>
                <NavLink to="/experience" className={navLinkClass} onClick={handleNavClick}>
                  Experience
                </NavLink>
                <NavLink to="/contact" className={navLinkClass} onClick={handleNavClick}>
                  Contact
                </NavLink>
              </nav>
              <div className="space-y-4 border-t border-gray-100 pt-4">
                <div className="flex flex-col">
                  <p className="m-0 mb-1 font-bold text-sm text-gray-500">Write</p>
                  <a
                    href="mailto:connectbalajidev@gmail.com"
                    className="m-0 text-inherit no-underline hover:text-green-700"
                  >
                    connectbalajidev@gmail.com
                  </a>
                </div>
                <div className="flex flex-col">
                  <p className="m-0 mb-1 font-bold text-sm text-gray-500">Follow</p>
                  <div className="flex items-center gap-3 m-0">
                    <a
                      href="https://www.linkedin.com/in/bal-aj-i"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <SiLinkedin size={24} color="#0A66C2" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <SiGithub size={24} color="#181717" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}

export default BottomSheet;
