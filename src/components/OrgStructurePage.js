"use client";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import Image from "next/image";

const OrgStructurePage = () => {
    const controls = useAnimation();
    const [ref, inView, entry] = useInView({ threshold: 1 });

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
                visible: { opacity: 1, scale: 1, backdropFilter: "blur(0)" },
                hidden: { opacity: 0, scale: 1, backdropFilter: "blur(4px)" },
            }}
            className="min-h-screen bg-fixed bg-bromo bg-cover bg-center"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 5 }}
                className="absolute top-[35%] left-[10%]"
            >
                <p className="font-title text-[24px] leading-4">
                    Rizki Alfarizi
                </p>
                <p className="text-lg tracking-tight">
                    Direktur Perencanaan Perjalanan
                </p>
                {/* <svg height="200" width="400">
                    <line
                        x1="120"
                        y1="10"
                        x2="250"
                        y2="130"
                        style={{ stroke: "white", strokeWidth: 4 }}
                    />
                </svg> */}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 6 }}
                className="absolute top-[25%] left-[20%]"
            >
                <p className="font-title text-[24px] leading-4">Rafi Surya</p>
                <p className="text-lg tracking-tight">
                    Direktur Kesehatan dan Kerohanian
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 7 }}
                className="absolute top-[20%] left-[35%]"
            >
                <p className="font-title text-[24px] leading-4">
                    Kenny Setiawan
                </p>
                <p className="text-lg tracking-tight">Direktur SDM</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 8 }}
                className="absolute top-[32%] left-[45%]"
            >
                <p className="font-title text-[24px] leading-4">Dicky Fauzia</p>
                <p className="text-lg tracking-tight">
                    Direktur Public Relation
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 9 }}
                className="absolute top-[20%] right-[30%]"
            >
                <p className="font-title text-[24px] leading-4">Jadid</p>
                <p className="text-lg tracking-tight">
                    Direktur Ketepatan Waktu
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 10 }}
                className="absolute top-[29%] right-[25%]"
            >
                <p className="font-title text-[24px] leading-4">
                    Sanjaya Kusuma
                </p>
                <p className="text-lg tracking-tight">Direktur Humas</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 11 }}
                className="absolute top-[35%] right-[15%]"
            >
                <p className="font-title text-[24px] leading-4">Akip Tsaqif</p>
                <p className="text-lg tracking-tight">Direktur IT</p>
            </motion.div>
            {/* <div className="absolute w-[calc(100vh*(4240/2832))] h-[calc(100vh*(4240/2832))] min-w-screen min-h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative pb-[100%]">
                </div>
            </div> */}
        </motion.div>
    );
};

export default OrgStructurePage;
