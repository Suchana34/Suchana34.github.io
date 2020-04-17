/** @jsx jsx */
import { Footer as ThemeFooter, jsx } from "theme-ui"
import {mdiLinkedin, mdiGithub, mdiGitlab,mdiEmail, mdiTwitter, mdiPost} from '@mdi/js'
import Icon from '@mdi/react'
import Divider from './../elements/divider';
import { Up } from './../styles/animations';

const links = [
  {
    icon: mdiGithub,
    link: 'https://github.com/Suchana34'
  },
  {
    icon: mdiGitlab,
    link: 'https://gitlab.com/Suchana34'
  },
  {
    icon: mdiLinkedin,
    link: 'https://www.linkedin.com/in/suchana-chakrabarti-770b5616b/'
  },
  {
    icon: mdiEmail,
    link: "mailto:suchanachakraborty@gmail.com"
  },
  {
    icon: mdiTwitter,
    link: 'https://twitter.com/this_suchchak'
  },
  {
    icon: mdiPost,
    link: 'https://medium.com/@suchanachakraborty'
  }
]

const Footer = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  return (
    <div>
    <Divider
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider fill = "footer" speed={0.2} offset={offset} factor={factor}>
      <Up>
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(3, 0, 0, -3, 0, 0)` }}>
         <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
              />
            </path>
          </svg>
      </div>
      </Up>
    </Divider>
    <ThemeFooter>
      <div style={{padding: 2 +`rem`, marginBottom: `1rem`, marginLeft: `2rem`,
      boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
          borderRadius: `2rem`
        }}> 
      <div style={{fontSize:3+`rem`}}>
      Built with ❤ by a crazy geek 👩‍💻 
      </div>
      <br></br>
      <div>{links.map((link)=>{

        return(


          <a
              href={link.link}
              target=":blank"
              style={{
                margin: 0 + `px ` + 10 + `px`,
                cursor: "pointer"
              }}
            >
              <Icon
                path={link.icon}
                size={2.2}
                color={'black'}
              ></Icon>
            </a>
        )
    })}
      </div>
      </div>
    </ThemeFooter>
    </div>
  )
}

export default Footer
