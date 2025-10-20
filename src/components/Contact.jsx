import React, { useState } from "react";
import { contactItems } from "../constant/data";
import { RiVkFill, RiGithubFill } from "@remixicon/react";

//motion
import { motion } from "motion/react";
import { staggerContainer, fadeIn, fadeInUp } from "../motion/animatiom";

const Contact = () => {
  // Состояние формы
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Обработчик изменения полей
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Обработчик отправки формы
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // Отправляем POST запрос на сервер вашего backend
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Сообщение отправлено!");
        // Очистить форму
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Ошибка при отправке сообщения");
      }
    } catch (error) {
      alert("Ошибка сети");
    }
  };

  return (
    <section className="py-20" id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800"
      >
        {/* Контент */}
        <div>
          <motion.h2 variants={fadeInUp}>Связаться со мной</motion.h2>
          <motion.p variants={fadeInUp} className="mt-3.5 mb-7">
            Готова к работе и обсудить ваш проект
          </motion.p>
          {/* Лист */}
          <motion.ul variants={fadeInUp}>
            {contactItems.map((item) => (
              <li key={item.id} className="flex item-center gap-1.5">
                <p className="text-white font-semibold">{item.label}</p>
                <a href="#">{item.link}</a>
              </li>
            ))}
          </motion.ul>

          {/* Социальные сети */}
          <motion.div variants={fadeIn} className="flex items-center gap-2 mt-6">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition-colors">
          <RiVkFill size={30} />
           </a>
            <a href="https://github.com/RimmaITMO" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition-colors">
          <RiGithubFill size={30} />
           </a>
          </motion.div>

        </div>
        {/* Форма для связи */}
        <motion.form variants={fadeIn} onSubmit={handleSubmit} className="grid gap-5">
          {/* Поле для ввода: Имя */}
          <div className="grid gap-2">
            <label htmlFor="name">Ваше имя *</label>
            <input
              name="name"
              type="text"
              placeholder="Введите ваше имя"
              className="input"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {/* Поле для ввода: Почта*/}
          <div className="grid gap-2">
            <label htmlFor="email">Email *</label>
            <input
              name="email"
              type="email"
              placeholder="Введите ваш email"
              className="input"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* Поле для ввода: Сообщение */}
          <div className="grid gap-2">
            <label htmlFor="message">Сообщение *</label>
            <textarea
              name="message"
              id="message"
              placeholder="Сообщение"
              className="h-40 border border-neutral-800 indent-4 py2 resize-none"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="primary-btn max-w-max">
            Отправить сообщение
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
