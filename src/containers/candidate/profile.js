import React from 'react';
import './profile.scss';

const CandidateProfile  = () => {
  return (
    <div className='profile_page'>
      <div className='global_delete'>
        <div className='left_part'>
          <img src={profileLogo} alt='profileLogo'/>
          <p>Profile</p>
        </div>
        <div className='right_part'>
        </div>
      </div>
      <CandidateProfileForm/>
    </div>
  );
}

export default CandidateProfile;