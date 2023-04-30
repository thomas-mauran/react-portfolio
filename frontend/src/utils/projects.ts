interface year{
    year: string
    projects: project[]
}
export interface project {
    name: string
    thumbnailUrl: string
    description: string
    prodUrl?: string
    sourceUrl?: string
    tags: string[]

}

export const projectByYears: year[] = [
    {"year": "2023", projects: [
        {"name": "Polynotes",
        "description": "Polynotes is our main school project for the next 3 years. It is made of many itterations this being the first one that we had to do alone in 2 months. We are soon gonna start to work on the second itteration that will be a complete rewrite of the application with a new tech stack and new features and a team of 14 students.",
        "prodUrl": "https://polynotes.cluster-2022-6.dopolytech.fr/manifesto",
        "thumbnailUrl": "https://github.com/thomas-mauran/Polynotes/blob/main/readme-assets/workspace.png?raw=true",
        "sourceUrl": "https://github.com/thomas-mauran/Polynotes",
        "tags": ["React", "NestJS", "Mongodb", "Argocd", "Terraform", "Kubernetes"]
        },
        {"name": "Time tracker",
        "description": "Time tracker is the final project for our mongodb class. It is a time tracker that allows you to track your time on projects. The goal here was to use as much as possible mongo capabilities and avoid using javascript for most of the logic. Using aggregation pipeline and indexes was a must to format and optimize as much as possible the requests.",
        "prodUrl": "https://time-tracker.cluster-2022-6.dopolytech.fr",
        "thumbnailUrl": "https://i.imgur.com/31Np0x0.png",
        "sourceUrl": "https://gitlab.polytech.umontpellier.fr/thomas.mauran/timetracker",
        "tags": ["React", "ExpressJS", "Mongodb", "Argocd", "Terraform", "Kubernetes"]
        }
    ]},
    {"year": "2022", projects: [
        {"name": "Polypedia",
        "description": "Polypedia is a school project for polytech montpellier DO which goal is to make anyone able to deploy it's own library. Rather it is to make a small library with your friends or to make an online school library. Users can create accounts, upload and find pdf to download or consults them online !",
        "prodUrl": "",
        "thumbnailUrl": "https://i.imgur.com/mrhbRqk.png",
        "sourceUrl": "https://github.com/thomas-mauran/Polypedia",
        "tags": ["Vue", "Express", "Postgresql", "Kubernetes"]
        },
    ]}
]