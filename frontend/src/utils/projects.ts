interface year {
  year: string;
  projects: project[];
}
export interface project {
  name: string;
  thumbnailUrl: string;
  description: string;
  prodUrl?: string;
  sourceUrl?: string;
  tags: string[];
}

export const projectByYears: year[] = [
  {
    year: "2023",
    projects: [
      {
        name: "Cobol guess the number",
        description: "Basic guess the number game written in COBOL, for fun and learning purposes.",
        prodUrl: "",
        thumbnailUrl: "https://raw.githubusercontent.com/thomas-mauran/cobol-mystery-number/main/readme-assets/cobol.png",
        sourceUrl: "https://github.com/thomas-mauran/cobol-mystery-number",
        tags: ["Cobol"],
      },
      {
        name: "Exoplanet dataviz",
        description:
          "This project is part of our data visualisation course at the DO Polytech departement of montpellier. The goal here was to find a dataset and ask ourselves 3 questions about it. Then we had to create a shiny app and a markdown document to visualize the data and answer our questions.",
        prodUrl: "https://thomas-mauran.shinyapps.io/Exoplanets-R-visualization/",
        thumbnailUrl: "https://raw.githubusercontent.com/thomas-mauran/Exoplanets-R-visualization/main/images/readme-thumbnail.png",
        sourceUrl: "https://github.com/thomas-mauran/Exoplanets-R-visualization",
        tags: ["R", "Shiny"],
      },
      {
        name: "Tic tac toe rust",
        description: "Rust simple TUI tic tac toe made with ratatui lib.   ",
        prodUrl: "",
        thumbnailUrl: "https://github.com/thomas-mauran/tic-tac-toe/blob/main/assets/preview.gif?raw=true",
        sourceUrl: "https://github.com/thomas-mauran/tic-tac-toe",
        tags: ["Rust"],
      },

      {
        name: "Polynotes",
        description:
          "Polynotes is our main school project for the next 3 years. It is made of many itterations this being the first one that we had to do alone in 2 months. We are soon gonna start to work on the second itteration that will be a complete rewrite of the application with a new tech stack and new features and a team of 14 students.",
        prodUrl: "https://polynotes.cluster-2022-6.dopolytech.fr/manifesto",
        thumbnailUrl: "https://github.com/thomas-mauran/Polynotes/blob/main/readme-assets/workspace.png?raw=true",
        sourceUrl: "https://github.com/thomas-mauran/Polynotes",
        tags: ["React", "NestJS", "Mongodb", "Argocd", "Terraform", "Kubernetes"],
      },
      {
        name: "Time tracker",
        description:
          "Time tracker is the final project for our mongodb class. It is a time tracker that allows you to track your time on projects. The goal here was to use as much as possible mongo capabilities and avoid using javascript for most of the logic. Using aggregation pipeline and indexes was a must to format and optimize as much as possible the requests.",
        prodUrl: "https://time-tracker.cluster-2022-6.dopolytech.fr",
        thumbnailUrl: "https://i.imgur.com/31Np0x0.png",
        sourceUrl: "https://gitlab.polytech.umontpellier.fr/thomas.mauran/timetracker",
        tags: ["React", "ExpressJS", "Mongodb", "Argocd", "Terraform", "Kubernetes"],
      },
      {
        name: "Dino machine learning",
        description:
          "The goal of this project is to make the environment of the famous chrome dino game and build / train a machine learning algorithm to beat it. This game is very simple, since your goal is to avoid obstacles by jumping over them or crouching on the floor, the score is calculated using. ",
        prodUrl: "",
        thumbnailUrl: "https://github.com/thomas-mauran/DinoAI/blob/main/env/assets/readme.gif?raw=true",
        sourceUrl: "https://github.com/thomas-mauran/DinoAI",
        tags: ["Python", "Gym", "Stable baseline", "Tensorflow"],
      },
    ],
  },
  {
    year: "2022",
    projects: [
      {
        name: "Polypedia",
        description:
          "Polypedia is a school project for polytech montpellier DO which goal is to make anyone able to deploy it's own library. Rather it is to make a small library with your friends or to make an online school library. Users can create accounts, upload and find pdf to download or consults them online !",
        prodUrl: "",
        thumbnailUrl: "https://i.imgur.com/mrhbRqk.png",
        sourceUrl: "https://github.com/thomas-mauran/Polypedia",
        tags: ["Vue", "Express", "Postgresql", "Kubernetes"],
      },
    ],
  },
];
