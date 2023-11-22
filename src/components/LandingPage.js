import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import Image from "next/image";

const LandingPage = () => {
    const controls = useAnimation();
    const [ref, inView, entry] = useInView({ threshold: 0 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
                visible: { opacity: 1, scale: 1, backdropFilter: "blur(4px)" },
                hidden: { opacity: 0, scale: 1, backdropFilter: "blur(0)" },
            }}
            className="relative flex min-h-screen justify-center items-center"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: "-40vh" }}
                transition={{ duration: 1, delay: 0.1 }}
            >
                <p className="text-[60px] font-title  tracking-tight font-bold">
                    Relpen Asal Asalan
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute left-[20vh]"
            >
                <Image
                    className="rounded-full"
                    src="/pics/dirut.jpg"
                    width={400}
                    height={400}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute right-[40vh]"
            >
                <p className="font-bold text-[40px] leading-10 drop-shadow-sm font-author mix-blend-multiply">
                    Jembud w di Psm
                </p>
                <p className="font-bold text-xl font-title italic">
                    - Dirut RAA
                </p>
            </motion.div>
        </motion.div>
    );
};

export default LandingPage;
