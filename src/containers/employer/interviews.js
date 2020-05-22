import React from 'react';
import './interviews.scss';

const EmployerInterviews  = () => {
  const {rows, columns} = useEmployerInterviews();
  return (
    <div className='employe_interview_page'>
      <div className='global_delete'>
        <div className='left_part'>
          <img src={film} alt='company'/>
          <p>Interviews</p>
        </div>
        <div className='right_part'>
          <div className='info__color'>
            <div className='color'></div>
            <p>Interviewed</p>
          </div>
          <div className='info__color'>
            <div></div>
            <p>Pending</p>
          </div>
        </div>
      </div>
      <ReserveTable rows={rows} columns={columns}/>
    </div>
  );
}

export default EmployerInterviews;