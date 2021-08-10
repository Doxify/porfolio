import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getProjectsData() {
  return [
    { 
      name: "DormMates", 
      desc: "A platform that allows university students to find the right roommates and housing for them.",
      start_date: "June 2021",
      end_date: "August 2021",
      area_of_development: "Backend",
      technologies: ["Express", "Node.js", "Pug", "Passport", "MySQL"],
      github_link: null,
      documentation_link: "https://docs.google.com/document/d/1YablUdmfkEUNHqHKhN6Jouy4g_yD5uapiQL1PkwlUI4/edit?usp=sharing",
      demo_link: "https://dormmates.net",
      image_link: "/images/dormmates.png"
    },
    { 
      name: "GoSupreme", 
      desc: "A Go package that allows you to easily interface with the www.supremenewyork.com backend. Currently supports obtaining products in stock, products by keywords, and product styles.",
      start_date: "June 2021",
      end_date: "Present",
      area_of_development: "Backend",
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
      desc: "Four player, online multiplayer version of the card game, Uno. Also features global and in-game chat rooms.",
      start_date: "March 2021",
      end_date: "May 2021",
      technologies: ["Docker", "Express", "Node.js", "Pug", "Passport", "Postgres", "Pusher"],
      area_of_development: "Full Stack",
      documentation_link: "https://docs.google.com/document/d/1GbiVfvtMYpH_urf1B13Z-IrYvBr3aOJzF5xrXoYaWNY/edit?usp=sharing",
      github_link: "https://github.com/doxify/uno",
      demo_link: "https://uno.ageorgescu.dev/",
      image_link: "/images/uno-preview.png"
    },
    { 
      name: "Web Server", 
      //- desc: "A web server capable of the HTTP/1.1  protocol created with only standard libraries in Java.",
      desc: "Backend web server written in Java using only standard libraries. It obeys the HTTP/1.1 protocol and can be used to distribute web pages, execute cgi scripts, or create REST APIs.",
      start_date: "February 2021",
      end_date: "March 2021",
      technologies: ["Java"],
      area_of_development: "Backend",
      github_link: "https://github.com/Doxify/web-server",
      demo_link: null,
      image_link: "/images/web-server-preview.png"
    },
    { 
      name: "Photo Sharing App", 
      desc: "Clone of the image sharing site, Imgur. It allows users to upload, search, comment on photos.",
      start_date: "May 2020",
      end_date: "June 2020",
      area_of_development: "Full Stack",
      technologies: ["Express", "Node.js", "MySQL", "Bootstrap"],
      github_link: "https://github.com/Doxify/imgur-clone/",
      demo_link: null,
      image_link: "/images/photo-sharing-preview.png"
    }
  ]
}