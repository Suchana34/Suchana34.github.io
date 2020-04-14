/** @jsx jsx */
import { Footer as ThemeFooter, jsx } from "theme-ui"
import {mdiLinkedin, mdiGithub, mdiGitlab,mdiEmail, mdiTwitter, mdiPost} from '@mdi/js'
import Icon from '@mdi/react'

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

const Footer = () => {
  return (
    <ThemeFooter>
      
      <div style={{fontSize:2+`rem`}}>
      Built with ❤ by a crazy geek 👧 
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
    </ThemeFooter>
  )
}

export default Footer
