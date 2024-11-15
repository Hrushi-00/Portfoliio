import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },

  ];
  
  const experiences = [
    {
      title: " MASTER IN COMPUTER APPLICATION ",
      company_name: "VIDYA BHARTI MAHAVIDYALAYA,AMRAVATI",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2021 - 2023",
      points: [
        " CGPA : 7.85.",
        
      ],
    },  
    {
      title: " BACHELOR OF COMPUTER APPLICATION",
      company_name: "SHRI SHIVAJI SCIENCE COLLEGE,AMRAVATI",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2018 -2021",
      points: [
        "Percentage : 63.75.",
        ],
    },
    {
      title: "HSC",
      company_name: "SETH BANSIDHAR JUNIOR COLLEHE OF SCIENCE,TELHARA",
      icon: shopify,
      iconBg: "#383E56",
      date: "2016 - 2018",
      points: [
        "Percentage : 56.77.",
       
      ],
    },
    {
      title: "SSC",
      company_name: "SWAMI VIVEKANAND DNYANPEETH,TELHARA",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2016",
      points: [
        "Percentage : 66.80.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "BRAINWAVE",
      description:
        "Beautiful Sections: Includes hero, services, features, how to use, roadmap, pricing, footer, and header.Engaging effects triggered by mouse movement and scrolling.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: " react",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Hrushi-00/Brainwave",
    },
    {
      name: "ECOMMERCE",
      description:
        "Lists available products with details such as name, price, and an Add to Cart button.Allows users to view and explore the product catalog easily.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Hrushi-00/ecom2",
    },
    {
      name: "LIBRARY MANAGEMENT ",
      description:
        "User Authentication Login and registration for librarians and users.The Search for books based on title, author, Add, edit, and delete member records.",
      tags: [
        {
          name: "Html5,Css",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "XAMPP Server",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Hrushi-00/Library-Management-System",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };