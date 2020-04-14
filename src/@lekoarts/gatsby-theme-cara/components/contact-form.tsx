
import React from "react"
import {
    Box,
  } from 'theme-ui'

const style = {
    box: {
      position: `relative`,
      padding: `3rem 3rem 3rem 3rem`,
      px: 1,
      py: 1,
      background: "none",
      margin: `3rem 3rem 3rem 3rem`,
    },
    input:{
        color: `gray`,
        fontSize: 1.5+ `em`,
        display: `block`,
        width: 470 + `px`,
        height: 50 + `px`,
        padding: `2rem 2rem 2rem 2rem`,
        margin: `5rem 5rem 5rem 5rem`,
        background: `transparent`,
        border: `solid 0.5rem #b3aca7`,
        transition: `all 0.3s ease-in-out`,
        borderRadius: 1+`rem`,
        outline: 'none',
        
        boxShadow: `0.7rem 0.7rem 0.7rem #667eea, 0.7rem 0.7rem 0.7rem #764ba2`,

    },
    button:{
        
        width: 210+ `px`,
        height: 50 + `px`,
        marginLeft: `4.5rem`,
        
        fontSize: 1.5 + `em`,
        color: `#aca49c`,
        backgroundColor: `transparent`,
        cursor: `pointer`,
        border: `solid 0.5rem #b3aca7`,
        
        borderRadius: 1+`rem`,
        outline: 'none',
        
      boxShadow: `0.7rem 0.7rem 0.7rem #667eea, 0.7rem 0.7rem 0.7rem #764ba2`,

    },
    textarea:{
        color: `gray`,
        fontSize: 1.5+ `em`,
        display: `block`,
        width: 470 + `px`,
        height: 100 + `px`,
        padding: `2rem 2rem 2rem 2rem`,
        margin: `5rem 5rem 5rem 5rem`,
        background: `transparent`,
        border: `solid 0.5rem #b3aca7`,
        transition: `all 0.3s ease-in-out`,
        borderRadius: 1+`rem`,
        outline: 'none',

        
      boxShadow: `0.7rem 0.7rem 0.7rem #667eea, 0.7rem 0.7rem 0.7rem #764ba2`,
    }

}
const ContactForm = () => {
    return(
    
        <div>

        <form 
        
        method= "post"
        action="#"
        >
            <Box
            
            as = "form"
            style={style.box}
            >
                <input type="text" name="name" id="name" placeholder="Your Name" style={style.input}/>
                <input type="text" name="email" id="email" placeholder="Your Email" style={style.input}/>
            
                <input name="message" id="message" placeholder="Message for me" style={style.textarea}></input>
                <input type="submit"  value="Send Me" style={style.button}/>
                <input type="reset" value="Clear" style={style.button}/>
            </Box>
        </form>
        </div>
    )
}
export default ContactForm



