import React from "react";
import { heroIcons } from "../constant/data";
import { BackgroundGradient } from "./ui/BackgroundGradient";


import Button from "./Button";

//motion эффекты
import { motion } from "motion/react";
import { staggerContainer, fadeIn, fadeInUp } from "../motion/animatiom";


const Hero = () => {
    return (
    <section className="py-28 lg:pt-40" id="home">
    <motion.div
    variants={staggerContainer} 
    initial='hidden'
    whileInView="show"
    viewport={{once:true}}
    className="container flex flex-col items-center">
        {/* Тут будет главная картинка */}
        <motion.div variants={fadeIn}>
        <BackgroundGradient className="w-70 h-70 lg:w-80 lg:h-80 rounded-3xl bg-zinc-900 ">
        <figure className="rounded-3xl overflow-hidden">
            <img src="/images/hero-img.png"
            alt="Rimma ITMO" width={452} height={452}/>
        </figure>
        </BackgroundGradient>
        </motion.div>
        {/* Контент */}
        <div className="text-center mt-8">
            <motion.h1 variants={fadeInUp} className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent text-3xl lg:text-5xl mb-1.5 font-bold">Добрый день</motion.h1>
            <motion.h2 variants={fadeInUp} >Я - Студентка курса "Веб-разработчик" </motion.h2>
            <motion.p variants={fadeInUp} className="max-w-[820px] mx-auto mt-4 mb-6">
            Римма — студентка курса веб-разработки, с увлечением осваиваю современные технологии и стараюсь создать качественные цифровые решения. Стремлюсь превращать сложные задачи в понятные и удобные для пользователей веб-приложения, постоянно развиваю свои навыки и внимание к деталям.
            </motion.p>
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-5">
              {heroIcons.map(icon => (
                   <a
                       key={icon.id}
                        href={icon.link}              // здесь берётся ссылка из объекта
                        target="_blank"
                      rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition-colors"
    >
      <icon.icon size={30} />      {/* рендерим иконку как компонент */}
    </a>
  ))}
</motion.div>
            { /* Кнопки */}
                <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center flex-wrap gap-5">
                <a href="https://disk.yandex.ru/i/Eag1591-uH3NCg" target="_blank" rel="noopener noreferrer"> <Button label="Резюме" classes="primary-btn" /> </a>
                <a href="https://disk.yandex.ru/i/Z0a6GEgElNstHA" target="_blank" rel="noopener noreferrer"> <Button label="Презентация" classes="secondary-btn" /> </a>
                </motion.div>
        </div>
    </motion.div>
</section>
    );
};

export default Hero; 