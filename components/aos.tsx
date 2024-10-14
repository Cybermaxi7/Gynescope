"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Customize AOS animation duration
        });
    }, []);

    return null;
};
