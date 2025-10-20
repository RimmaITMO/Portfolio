import {
    RiGithubFill,
    RiVkFill,
  } from "@remixicon/react";
  
  export const navItems = [
    {
      id: 1,
      label: "Главная",
      href: "#home",
    },
    {
      id: 2,
      label: "Обо мне",
      href: "#about",
    },
    {
      id: 3,
      label: "Резюме",
      href: "#resume",
    },
    {
      id: 4,
      label: "Проекты",
      href: "#projects",
    },
    {
      id: 5,
      label: "Контакты",
      href: "#contact",
    },
  ];
  
  export const heroIcons = [
    {
      id: 1,
      icon: RiVkFill,
      link: "https://vk.com/"
    },
    {
      id: 2,
      icon: RiGithubFill,
      link: "https://github.com/RimmaITMO"
    },
  ];
  
  export const aboutItems = [
    {
      id: 1,
      label: "Основы веб-технолгий",
    },
    {
      id: 2,
      label: "Основы JavaScript",
    },
    {
      id: 3,
      label: "Современные технологии верстки",
    },
    {
      id: 4,
      label: "Методологии и инструменты современной верстки",
    },
    {
      id: 5,
      label: "PHP & MySQL. Основы разработки веб-приложений",
    },
    {
      id: 6,
      label: "Средства организации процесса веб-разработки в команде 'GIT'",
    },
    {
      id: 7,
      label: "Современный JavaScript: новые возможности",
    },
    {
      id: 8,
      label: "Введение в TypeScript и Flow",
    },
    {
      id: 9,
      label: "Серверные приложения и микросервисы на Node.js",
    },
    {
      id: 10,
      label: "React и Vue: компненты в действии",
    },
  ];
  
  export const ResumeItems = [
    {
      id: 1,
      title: "Опыт",
      list: [
        {
          role: "Методист",
          label: "Работа",
          time: "2019-по настоящее время",
        },
        {
          label: "Фриланс",
          role: "Дизайнер",
          time: "2019- по настоящее время",
        },
      ],
    },
    {
      id: 2,
      title: "Образование",
      list: [
        {
          label: "ИТМО",
          role: "Курс дизайна",
          time: "2019",
        },
        {
          label: "ИТМО",
          role: "Курс веб-разраюотчик",
          time: "2022",
        },
      ],
    },
  ];
  
  export const ProjectsItems = [
    {
      id: 1,
      title: "Методологии и инструменты современной верстки",
      src: "/images/portfolio-1.png",
      text: "Принципы организации CSS, GRID CSS, Создание верстки PixelPerfect",
    },
    {
      id: 2,
      title: "Pабота с Bootstrap",
      src: "/images/portfolio-2.png",
      text: "Работа фронтенд-фреймворком для быстрой и удобной адаптивной верстки Bootstrap",
    },
    {
      id: 3,
      title: "Средства организации процесса веб-разработки в команде",
      src: "/images/portfolio-3.png",
      text: "Знакомство и погружение в контроль версии Git ",
    },
    {
      id: 4,
      title: "Программа переводчик",
      src: "/images/portfolio-4.png",
      text: "Работа с API, создание рабочей старницы на возможностях GitHub Pages",
    },
  ];
  
  export const contactItems = [
    {
      id: 1,
      label: "Email:",
      link: "rimmaagliullina8@yandex.ru",
    },
    {
      id: 2,
      label: "Телефон:",
      link: "+7 (913) 5662153",
    },
    {
      id: 3,
      label: "Адрес:",
      link: "Красноярск",
    },
  ];