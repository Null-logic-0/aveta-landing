"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardLayout from "../UI/CardLayout";
import { FaChevronDown } from "react-icons/fa";

type FaqAccordionProps = {
  heading: string;
  content: string;
};

function FaqAccordion({ heading, content }: FaqAccordionProps) {
  const [show, setShow] = useState(false);

  return (
    <CardLayout className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h3
          className={`font-semibold ${show ? "text-[#FF4DC3]" : "text-white"}`}
        >
          {heading}
        </h3>
        <button
          onClick={() => setShow(!show)}
          className={`cursor-pointer transform transition-transform duration-300 ${
            show ? "rotate-180 text-[#FF4DC3]" : "text-white"
          }`}
          aria-expanded={show}
          aria-controls="faq-content"
          aria-label={show ? "Collapse content" : "Expand content"}
        >
          <FaChevronDown />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {show && (
          <motion.div
            key="content"
            id="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-sm opacity-80 font-medium mt-2">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </CardLayout>
  );
}

export default FaqAccordion;
