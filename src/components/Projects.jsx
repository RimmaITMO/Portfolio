import React from "react";
import { Carousel } from "./ui/carousle";
import { ProjectsItems } from "../constant/data";

//motion
import { motion } from "motion/react";
import { staggerContainer, fadeIn, fadeInUp } from "../motion/animatiom";

const Projects = () => {
    return (
    <section className="section" id="projects">
        <motion.div variants={staggerContainer} 
    initial='hidden'
    whileInView="show"
    viewport={{once:true}}
    className="container" >
        {/*  Наименовние Раздела */ }
        <motion.h2 variants={fadeInUp} className="text-center">Проекты во время обучения</motion.h2>


        {/* Слайдер */ }
        <motion.div variants={fadeIn} className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={ProjectsItems}/>
        </motion.div>

        </motion.div>
    </section>
    );
};

export default Projects; 