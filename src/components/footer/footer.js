import React from 'react';
import './footer.scss';
import SignUp from '../signUp/signUp';

const Footer = (props) => {
  return(
    <footer >
      <SignUp />
      <div className='little_footer container space_between'>
        <h3>Questions: jeff@gohiretalent.com</h3>
        <p>© 2011-2020 Hire Talents Events Inc. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;