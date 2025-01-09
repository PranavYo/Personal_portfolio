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
    argoid_logo,
    virtusa_logo,
    girlscript_logo,
    dsa_logo,
    c_logo,
    cpp_logo,
    java_logo,
    python_logo,
    sql_logo,
    bootstrap_logo,
    django_logo,
    angular_logo,
    framer_motion_logo,
    aws_logo,
    P_Portfolio_DP,
    budget_tracker_dp,
    newspeek_dp,
    marquee_logo,
    epam_logo,
    exceljs_logo,
    axios_logo,
    quill_logo,
    feedback_app_dp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Structures",
      icon: creator,
    },
    {
      title: "Algorithms",
      icon: mobile,
    },
    // {
    //   title: "Problem Solver",
    //   icon: creator,
    // },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angualar",
      icon: angular_logo
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
      name: "ExcelJs",
      icon: exceljs_logo,
    },
    {
      name: "Axios",
      icon: axios_logo,
    },
    {
      name: "QuillJs",
      icon: quill_logo,
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
    {
      name: "DSA",
      icon: dsa_logo
    },
    {
      name: "C",
      icon: c_logo
    },
    {
      name: "C++",
      icon: cpp_logo
    },
    {
      name: "Java",
      icon: java_logo
    },
    {
      name: "Python",
      icon: python_logo
    },
    {
      name: "Django",
      icon: django_logo
    },
    {
      name: "MySQL",
      icon: sql_logo
    },
    {
      name: "BootStrap",
      icon: bootstrap_logo
    },
    {
      name: "Framer Motion",
      icon: framer_motion_logo
    },
    {
      name: "AWS",
      icon: aws_logo
    },
    
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Epam Systems",
      icon: epam_logo,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Present",
      points: [
        "Working for MasterCard as a UI engineer and contributing in their Support Case Management portal as a part of three-person team.",
        "Created entire Contact and FAQs page using modern UI components for the portal with dynamic FAQs based on current page which were curated by observing several mails from customers. Reduced customer mails regarding queries significantly by almost 70%.",
        "Implemented export functionality for customers to export and download the case details into a styled excel file by which they can check for any information without logging-in or in offline mode.",
        "Developed entire global search feature for the portal. This helped customers to search for any case from any page using case number or summary and save their time.",
        "Built re-usable rich text editor which has all the features including custom made inline-image support with upload functionality by which customers can explain their query more clearly and effectively.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Marquee Equity",
      icon: marquee_logo,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Dec 2023",
      points: [
        "Developed UI for Chat feature in company portal. This helped organisation to communicate with their clients effectively and eliminated the use of mail.",
        "Proposed an idea to make the portal’s side navigation bar collapsible and implemented it, this helped to gain additional width for primary content.",
        "Enhanced portal’s primary data-display table component with search and filter functionalities, this significantly reduced time to find a certain thing in large data. ",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Argoid",
      icon: argoid_logo,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Sept 2023",
      points: [
        "Contributed to real-time recommendation providing products of organisation.",
        "Implemented a video-player for OTT platform with real-time watch-percentage calculation, this is used to feed the recommendation-model to provide content feed based on customer’s taste.",
        "Developed dashboard for one of the company’s product with eye-catching tables, graphs and cards to help company review its metrics effectively.",
        "Enhanched UI/UX with top-notch gradient responsive design and ensuring cross-browser compatibility.",
        "Built real-time CSS-editor to display the items of online stores based on the client’s input of styles which enabled them to style their products view based on their company theme.",
        "Developed slot-recommendation UI in one of the products allowing clients to add their product recommendations in their stores based upon slots to their customers.",
        "Integrated several CRUD and functional APIs to make UI/UX interactive.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Virtusa",
      icon: virtusa_logo,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Mar 2023",
      points: [
        "Developed Full Stack Applications with team collaboration.",
        "Improved myself 70% by actively participating in Real-Time projects and learning new emerging technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Mastered React, Django and other emerging technologies and built successful Full Stack projects.",
      ],
    },
    {
      title: "Student Ambassador",
      company_name: "Virtusa",
      icon: virtusa_logo,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Mar 2022",
      points: [
        "Organised Technical events in the College on behalf of Virtusa.",
        "Engaged with students, answering their questions around our institution.",
        "Conducted events to Reassure and guide the students towards their Bright Future.",
      ],
    },
    {
      title: "OPEN SOURCE CONTRIBUTOR",
      company_name: "Girlscript Winter of Contributing",
      icon: girlscript_logo,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Nov 2021",
      points: [
        "Coded and managed codes on Data Structures and Algorithms with explanations in C++.",
        "Eliminated the errors from pre-existing codes.",
        "Improved the accuracy of the codes to nearly 98%.",
        "Contributed to many Programs under the guidance of an expert facilitator.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "Personal portfolio with interactive 3D objects and effects. Implemented by using a generic editable details file which can be changed according to the users background.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Framer-motion",
          color: "pink-text-gradient",
        },
      ],
      image: P_Portfolio_DP,
      source_code_link: "https://github.com/PranavYo/Personal_portfolio.git",
    },
    {
      name: "Feedback Application",
      description:
        "MERN-Stack web application that allows companies to recieve feedback from their customers. Made using modern UI components with up-vote and comment features.",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: feedback_app_dp,
      source_code_link: "https://github.com/PranavYo/Feedback-App.git",
    },
    {
      name: "Budget Tracker and Bill splitter",
      description:
        "Full-stack web application that enables users to track their budgets, view their transactions, and split the bills among friends.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "RestAPI",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: budget_tracker_dp,
      source_code_link: "https://github.com/PranavYo/BudgetTracking-BillSpliting.git",
    },
    {
      name: "News-peek",
      description:
        "A web based Application to get quick news update on different Genre and enjoy uninterrupted news without needing to change tabs for more news. Implemented infinite scroll.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "RestAPI",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
      ],
      image: newspeek_dp,
      source_code_link: "https://github.com/PranavYo/NewsPeek-React.git",
    },
  ];
  
  export { services, technologies, experiences, projects };