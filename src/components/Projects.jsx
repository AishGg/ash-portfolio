"use client";

import React from 'react'
import {Card} from './Card.jsx'

export const Projects = () => {
    const projects = [
        {
            title: "Invest Pro",
            des: "This is web3 Yeild aggregator, crypto investing with real traders, diversified strategies",
            img: "/images/investPro.png",
            github: "https://github.com/subodh-thallada/EasyAConsensusHackathon2025",
            Live: "https://easy-a-consensus-hackathon2025.vercel.app/"
        },
        {
            title: "DNAArt",
            des: "A web application which generates the images based on the DNA Sequence",
            img: "/images/DNA.png",
            github: "https://github.com/AishGg/DnaArt",
            Live: "https://devpost.com/software/dna-art"
        },
        {
            title: "Social Connect",
            des: "ScocialConnect a platform that enables users to connect, share posts, like, comment, and follow other users",
            img: "/images/social.webp",
            github: "https://github.com/AishGg/mern-app",
            Live: "https://github.com/AishGg/mern-app"
        },
        {
            title: "Currency Converter",
            des: "A React-based Currency Converter that convert between currencies using live exchange rates from an external API",
            img: "/images/currency.png",
            github: "https://github.com/AishGg/Currency-Converter",
            Live: "https://github.com/AishGg/Currency-Converter"
        }
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl'>
        {projects.map((project, idx)=>(
            <Card 
                key={idx} 
                title={project.title}
                des= {project.des}
                img= {project.img}
                github= {project.github}
                Live= {project.Live}
            />
        ))}
    </div>
  )
}
