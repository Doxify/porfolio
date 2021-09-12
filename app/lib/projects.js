export const getProjectsData = () => {
  return [
    { 
      name: "DormMates", 
      desc: "A platform that allows university students to find roommates and housing",
      start_date: "June 2021",
      end_date: "August 2021",
      area_of_development: "Backend",
      bullets: [
        "Led the project from start to finish and won best milestone twice (out of 5)",
        "Helped design the backend architecture using Express and Node",
        "Deployed the application to AWS using the EC2 and RDS services"
      ],
      technologies: ["Express", "Node.js", "Pug", "Passport", "MySQL"],
      github_link: null,
      documentation_link: "https://docs.google.com/document/d/1YablUdmfkEUNHqHKhN6Jouy4g_yD5uapiQL1PkwlUI4/edit?usp=sharing",
      demo_link: "https://dormmates.net",
      image_link: "/images/dormmates.png"
    },
    { 
      name: "GoSupreme", 
      desc: "Unofficial API for www.supremenewyork.com written in Go",
      start_date: "June 2021",
      end_date: "Present",
      area_of_development: "Backend",
      bullets: [
        "Reverse engineered network requests to create a wrapper library",
      ],
      technologies: ["Go"],
      github_link: "https://github.com/Doxify/gosupreme",
      demo_link: null,
      image_link: "/images/go-supreme.png"
    },
    // { 
    //   name: "Discord Credentials Bot", 
    //   desc: "A bot for my software engineering team's Discord server. The bot's purpose was to return user credentials for our production servers.",
    //   date: "June 2021",
    //   area_of_development: "Backend",
    //   technologies: ["Go"],
    //   github_link: "https://github.com/Doxify/csc648-discord-bot",
    //   demo_link: null,
    //   image_link: "/images/discordgo-bot.png"
    // },
    { 
      name: "Uno", 
      desc: "Four player, online multiplayer clone of the card game, Uno",
      start_date: "March 2021",
      end_date: "May 2021",
      bullets: [
        "Implemented state and chat with Web Sockets, Express, and Node",
        "Dockerized the application and deployed it to Heroku"
      ],
      technologies: ["Docker", "Express", "Node.js", "Pug", "Passport", "Postgres", "Pusher"],
      area_of_development: "Full Stack",
      documentation_link: "https://docs.google.com/document/d/1GbiVfvtMYpH_urf1B13Z-IrYvBr3aOJzF5xrXoYaWNY/edit?usp=sharing",
      github_link: "https://github.com/doxify/uno",
      demo_link: "https://uno.ageorgescu.dev/",
      image_link: "/images/uno-preview.png"
    },
    { 
      name: "Web Server", 
      desc: "HTTP/1.1 server created using only standard libraries in Java",
      start_date: "February 2021",
      end_date: "March 2021",
      bullets: [
        "Utilized the factory design pattern to handle incoming requests",
      ],
      technologies: ["Java"],
      area_of_development: "Backend",
      github_link: "https://github.com/Doxify/web-server",
      demo_link: null,
      image_link: "/images/web-server-preview.png"
    },
    { 
      name: "Imgur Clone", 
      desc: "Fully functioning clone of Imgur including user profiles, comments, and likes",
      start_date: "May 2020",
      end_date: "June 2020",
      area_of_development: "Full Stack",
      bullets: [
        "Served the frontend (HTML/CSS/Bootstrap) with Express and Node",
        "Created REST API that utilized a MySQL database for storage",
      ],
      technologies: ["Express", "Node.js", "MySQL", "Bootstrap"],
      github_link: "https://github.com/Doxify/imgur-clone/",
      demo_link: null,
      image_link: "/images/photo-sharing-preview.png"
    }
  ]
}