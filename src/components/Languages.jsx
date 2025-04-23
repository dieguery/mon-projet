import React from 'react'
import HTML from '../assets/images/logo-html5.png'
import CSS from '../assets/images/logo-css.png'
import JS from '../assets/images/logo-js.png'
import Python from '../assets/images/python.png'

const Languages = () => {
  return (
    <>
        <h1>Les langages</h1>   
        <div id="languages">
            <img src={HTML} alt="html" />
            <img src={CSS} alt="css" />
            <img src={JS} alt="js" />
            <img src={Python} alt="python" />
        </div> 
    </>
  )
}

export default Languages