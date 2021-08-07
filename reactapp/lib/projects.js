import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getSortedProjectsData() {
  // // Get the file names under /projects
  // const fileNames = fs.readdirSync(projectsDirectory);
  // const allProjectsData = fileNames.map(fileName => {
  //   // Remove the ".md" from the file name to get its id
  //   const id = fileName.replace(/\.md$/, '');

  //   // Read markdown file as a string
  //   const fullPath = path.join(projectsDirectory, fileName);
  //   const fileContents = fs.readFileSync(fullPath, 'utf8');

  //   // Use gray-matter to parse the project metadata section
  //   const matterResult = matter(fileContents);

  //   // Combine the data with the id
  //   return {
  //     id,
  //     ...matterResult.data,
  //   }
  // }) 

  // // Sort the projects by date
  // return allProjectsData.sort((a, b) => {
  //   if (a.date < b.date) {
  //     return 1
  //   } else if (a.date > b.date) {
  //     return -1
  //   } else {
  //     return 0
  //   }
  // })

  return {
    0:{ 
      name: "Unofficial API for Supreme", 
      desc: "A Go package that allows you to easily interface with the www.supremenewyork.com backend. Currently supports obtaining products in stock, products by keywords, and product styles.",
      date: "June 2021",
      area_of_development: "Backend",
      technologies: ["Go"],
      github_link: "https://github.com/Doxify/gosupreme",
      demo_link: null,
      image_link: "/images/go-supreme.png"
    },
    1: { 
      name: "Discord Credentials Bot", 
      desc: "A bot for my software engineering team's Discord server. The bot's purpose was to return user credentials for our production servers.",
      date: "June 2021",
      area_of_development: "Backend",
      technologies: ["Go"],
      github_link: "https://github.com/Doxify/csc648-discord-bot",
      demo_link: null,
      image_link: "/images/discordgo-bot.png"
    },
    2: { 
      name: "Uno", 
      desc: "Four player, online multiplayer version of the card game, Uno. Also features global and in-game chat rooms.",
      date: "April 2021",
      technologies: ["Docker", "Express", "Node.js", "Pug", "Passport", "Postgres", "Pusher"],
      area_of_development: "Full Stack",
      github_link: "https://github.com/doxify/uno",
      demo_link: "https://uno.ageorgescu.dev/",
      image_link: "/images/uno-preview.png"
    },
    3: { 
      name: "HTTP/1.1 Web Server", 
      //- desc: "A web server capable of the HTTP/1.1  protocol created with only standard libraries in Java.",
      desc: "Backend web server written in Java using only standard libraries. It obeys the HTTP/1.1 protocol to distribute web pages.",
      date: "February 2021",
      technologies: ["Java"],
      area_of_development: "Backend",
      github_link: "https://github.com/Doxify/web-server",
      demo_link: null,
      image_link: "/images/web-server-preview.png"
    },
    4: { 
      name: "Photo Sharing App", 
      desc: "Clone of the image sharing site, Imgur. It allows users to upload, search, comment on photos.",
      date: "June 2020",
      area_of_development: "Full Stack",
      technologies: ["Express", "Node.js", "MySQL", "Bootstrap"],
      github_link: "https://github.com/Doxify/imgur-clone/",
      demo_link: null,
      image_link: "/images/photo-sharing-preview.png"
    }
  }
}