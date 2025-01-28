import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='contacts'>
        <div className="dk">
            <div className="cont-c">
                <h3>Let’s Get In touch</h3>
                <form className='c-form'>
                    <input type="text" placeholder='Full name'/>
                    <input type="email" placeholder='Email' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type Message'></textarea>
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact