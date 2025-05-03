export const projects = [
  {
    id: "medimart",
    title: "MediMart",
    image: [
      "https://i.postimg.cc/vZZdjb88/medi-mart-1.png",
      "https://i.postimg.cc/h48WtffP/medi-mart-2.png",
      "https://i.postimg.cc/dtqMkwyR/medi-mart-3.png",
    ],
    shortDesc: "Medicine e-commerce shop built with Next.js and TypeScript.",
    github: "https://github.com/Azhar730/medi-mart",
    live: "https://medimart-nu.vercel.app",
    details: `MediMart is a modern medicine e-commerce application that allows users to browse medicines, add them to cart, upload prescriptions, and place orders online. Built with Next.js and TypeScript, the application provides a high-performance, SEO-friendly platform with server-side rendering. Redux is used for state management, enabling smooth cart functionality and authentication flow. Tailwind CSS ensures a sleek and responsive UI. Users can register, log in, manage their profiles, and view order history. Admins can manage medicines, view orders, and verify prescriptions from a dedicated dashboard. The project integrates MongoDB for data storage and Express.js for backend APIs. Features include user authentication, protected routes, file upload (prescriptions), search and filtering, and role-based access control. This project demonstrates practical knowledge of full-stack development, TypeScript best practices, and scalable e-commerce architecture. It is designed to provide a seamless shopping experience and ensure data privacy and security.`,
    tech: ["Next.js", "Redux", "Mongoose", "MongoDB", "Tailwind"],
  },
  {
    id: "bike-store",
    title: "Bicycle Store",
    image: [
      "https://i.postimg.cc/rmSG56rx/cycle-mart-1.png",
      "https://i.postimg.cc/qqDN3Qj2/cycle-mart-2.png",
      "https://i.postimg.cc/BQy8ZY80/cycle-mart-3.png",
    ],
    shortDesc: "Bike e-commerce dashboard built with TypeScript and Express.",
    github: "https://github.com/Azhar730/cycle-mart",
    live: "https://cycle-mart-chi.vercel.app",
    details: `Bicycle Store is a full-featured backend dashboard built to manage an online bike store. It focuses on administrative functionalities like managing products (CRUD operations), user access, and order status. The application is developed using TypeScript, Express.js, and MongoDB, ensuring type safety and performance. Admin users can log in securely, add or remove bicycles, update stock information, and monitor customer orders. The database schema is designed to support relationships between bikes, categories, and orders. API endpoints are protected with JWT-based authentication, and all data flows follow RESTful standards. The project demonstrates a strong command over backend logic, middleware structure, MongoDB modeling, and error handling. It also includes form validation, pagination, and query filters to make the data management scalable and efficient. Though it currently does not have a frontend, it is prepared for easy integration with any React or Next.js frontend in the future. This project showcases backend expertise and architectural planning for real-world commerce applications.`,
    tech: ["TypeScript", "Express", "Mongoose", "MongoDB", "React"],
  },
  {
    id: "food-unity",
    title: "Food Unity",
    image: [
      "https://i.postimg.cc/1R8Vx1tH/food-unity-1.png",
      "https://i.postimg.cc/cHgxzZmt/food-unity-2.png",
      "https://i.postimg.cc/NMHt4Ds1/food-unity-3.png",
    ],
    shortDesc: "A food sharing app built with React, Firebase, and Node.js.",
    github: "https://github.com/Azhar730/food-unity",
    live: "https://foodunity-cc2e3.web.app",
    details: `Food Unity is a full-stack web application designed to help individuals and communities share excess food with those in need. Users can either donate food or request available donations based on location and availability. The app uses Firebase for user authentication and authorization, supporting different roles like admin, donor, and recipient. Role-based access ensures that only authorized users can perform specific actions such as adding food listings, managing users, or approving requests. The frontend is built using React and Tailwind CSS, ensuring a responsive and user-friendly interface. The backend uses Node.js, Express, and MongoDB to handle data storage, secure APIs, and dynamic routing. Real-time updates and conditional rendering make the user experience smooth and efficient. Features include login/logout, dashboard views, food status tracking, and admin controls. This project reflects a strong grasp of MERN stack development and emphasizes solving real-world problems with technology.`,
    tech: ["React", "Firebase", "Express", "MongoDB"],
  },
];
