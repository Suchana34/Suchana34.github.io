/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      starShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        starShadow: `xl`,
      },
      boxShadow: `0.5rem 0.5rem 0.5rem #667eea, 0.7rem 0.7rem 0.7rem #764ba2`,
      
    }}
  >
    <div
      sx={{
        letterSpacing: `wide`,
        pt: 2,
        fontSize: [2, 3],
        fontWeight: `medium`,
      }}
    >
      {title}
    </div>
    
        
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,fontSize: 2 }}>{children}</div>
  </a>
)

export default ProjectCard
