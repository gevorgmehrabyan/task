import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import headerUser from '../../assets/images/icons/headerUser.png';
import {connect} from 'react-redux';

const Header = ({token}) => {

  console.log(token)
  return (
    <header>
      <div className='container space_between'>
        <Link to='/'>
          <h2><span>Hire</span>Sessions</h2>
        </Link>
        <Link to={'/login'}>
          <button><img src={headerUser} alt='log_in'/> LOG IN</button>
        </Link>
      </div>
    </header>
  );
};

export default connect(
  state => {
    return{
      token: state.Auth.token
    }
  },
  null
)(Header) ;