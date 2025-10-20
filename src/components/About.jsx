import React from "react";
import { aboutItems } from "../constant/data";

//motion
import { motion } from "motion/react";
import { staggerContainer, fadeIn, fadeInUp } from "../motion/animatiom";

const About = () => {
    return (
    <section className="section bg-secondary-clr" id="about">
        <motion.div variants={staggerContainer} 
    initial='hidden'
    whileInView="show"
    viewport={{once:true}}
    className="container">
        <motion.h2 variants={fadeInUp} >Обо мне</motion.h2>

        <motion.p variants={fadeInUp} className="mt-3 mb-9">
       Текст обо мне
        </motion.p>

        {/* Навыки умения скилы */}
        <div>
            <motion.p variants={fadeInUp} className="text-white font-semibold text-xl mb-3">Навыки:</motion.p>
            <motion.ul variants={fadeInUp} className="">
                {aboutItems.map(item => ( 
                    <li key={item.id}>
                    <p>✓ {item.label}</p>
                    </li>
                ))}
            </motion.ul>
        </div>
         </motion.div>
        </section>
        );

};

export default About; 