"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();

    const springConfig = { damping: 300, stiffness: 300 };
    const barAnimation = useSpring(scrollYProgress, springConfig);

    return (
        <motion.div
            className="fixed left-0 right-0 top-0 z-20 h-1 origin-left bg-gradient-to-r from-accent-3 to-accent-1"
            style={{ barAnimation }}
        />
    );
};

export default ProgressBar;
