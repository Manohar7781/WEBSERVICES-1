import React from 'react';
import "../Css/NewsLetterform.css"
import sub1 from "../Images/subscr-gear.png";
import sub2 from "../Images/subscr1.png";
import sub3 from '../Images/subscr-mailopen.png'
export default function NewsLetterform() {
  return (
    <div className='newsletter'>
<img src={sub2} alt="sub2" className='mail' />

<div className="field">
  <h4 className='email_label'>Email NewsLetters!</h4>
<form action="">
  <input type="email" name="Email" id="mail_input" placeholder='Email' />
  <button id='sub_button'> Subscribe</button>
</form>
<div className='sub_title'>
Sign up for new content, updates, surveys & offers by Alphanumericideas!
</div>
</div>
<div className='image-block'>
<img src={sub3} alt="" className='mail_2'  style={{opacity:"1",right:"20px"}}/>
<img src={sub1} alt="" className='gear' />
</div>

    </div>
  )
}