"use client";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import LandingPage from "@/components/LandingPage";
import OrgStructurePage from "@/components/OrgStructurePage";

export default function Home() {
    return (
        <div>
            <LandingPage />
            <OrgStructurePage />
        </div>
    );
}
