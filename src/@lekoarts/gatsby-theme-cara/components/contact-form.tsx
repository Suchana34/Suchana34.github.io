
import React, { useState } from "react"

const style = {
    box: {
      position: `relative`,
      padding: `3rem 3rem 3rem 3rem`,
      px: 1,
      py: 1,
      background: "none",
      color: `white`,
      borderRadius: `2rem`,
      boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
      overflow: `hidden`
    },
    input:{
        color: `white`,
        fontSize: 1.5+ `em`,
        display: `block`,
        width: 30 + `rem`,
        height: 2 + `rem`,
        padding: `2rem 2rem 2rem 2rem`,
        margin: `5rem 5rem 5rem 5rem`,
        background: `#667eea`,
        borderRadius: 1+`rem`,
        outline: 'none',
        
        boxShadow: `0.7rem 0.7rem 0.7rem #764ba2`,

    },
    button:{
        
        width: 12+ `rem`,
        height: 4 + `rem`,
        marginLeft: `5rem`,
        fontSize: 1.5 + `em`,
        color: `white`,
        backgroundColor: `#667eea`,
        cursor: `pointer`,
        
        borderRadius: 1+`rem`,
        outline: 'none',
        
      boxShadow: `0.7rem 0.7rem 0.7rem #764ba2`,

    },
    textarea:{
        color: `white`,
        fontSize: 1.5+ `em`,
        display: `block`,
        width: 30 + `rem`,
        height: 7 + `rem`,
        padding: `2rem 2rem 2rem 2rem`,
        margin: `5rem 5rem 5rem 5rem`,
        background: `#667eea`,
        borderRadius: 1+`rem`,
        outline: 'none',

        
      boxShadow: `0.7rem 0.7rem 0.7rem #764ba2`,
    },

}



const ContactForm = () => {

  const [lockscroll, setLockscroll] = useState(false);



  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        alert("Message sent ✈");
      } else {
        alert("Cannot send message now, Make sure you have filled all the details 😕");
      }
    };
    xhr.send(data);
  }

  
    return(
      
        <div>
        <form 

        onSubmit = {
          submitForm
        }


        method= "POST"
        action="https://formspree.io/xrgajbey"
        style={style.box}


        >
                <input type="text" name="name" id="full-name" placeholder="Your Full Name" required style={style.input} ></input>
                <input type="email" name="_replyto" required id="email-address" placeholder="Your Email" style={style.input} />
            
                <input name="message" id="message" placeholder="Message for me" required style={style.textarea} />
                <input type="submit"  value="Send Me" style={style.button} />
                <input type="reset" value="Clear" style={style.button} />
        </form>
        </div>
    )
}
export default ContactForm



