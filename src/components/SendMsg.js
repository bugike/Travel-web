import React from 'react';
import './SendMsg.css';

function SendMsg() {
    return (
        <div className='main-container'>
            <div className='banner'></div>
            <div className='contact-container'>
                <form className='msg-form'>
                    <h2 id='send-title'>Send us a message</h2>
                    <div className='form-row'>
                        <div className='col-2'>
                            <label for='firstName' >First name <span>*</span></label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='col-2'>
                            <label for='lastName' >Last name <span>*</span></label>
                            <input type='text' className='form-control'/>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='col-1'>
                            <label for='email' >Email <span>*</span></label>
                            <input type='email' className='form-control' />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='col-1'>
                            <label for='msg' >Message</label>
                            <textarea className='form-control' placeholder='Leave your message here...' rows='7'></textarea>
                        </div>
                    </div>
                    <button type='submit' className='btn-primary send-msg' onClick={ 
                    () => alert('Submited sucessfully! We will contact you soon.')
                    }>Send Message</button>
                </form>
                <div className='contact-info'>
                    <h4>Corporate Office</h4>
                    <p>xxxx Any Street</p>
                    <p>Sacramento, CA 95xxx</p>
                    <br></br>
                    <h4>Contact Info</h4>
                    <p>Phone: (800) xxx-xxxx</p>
                    <p>Fax: (916) xxx-xxxx</p>
                    <p>support@trvl.com</p>
                    <br></br>
                    <h4>Business Hours</h4>
                    <p>Mon-Fri 5am-5pm</p>
                    <p>Pacific Time</p>
                </div>
            </div>
        </div>
    )
}

export default SendMsg
