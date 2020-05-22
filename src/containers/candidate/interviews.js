import React from 'react';
import './interviews.scss';

const CandidateInterviews  = () => {
  const {rows, columns, changeActivePage} = useCandidateInterviews();
  return (
    <div className='interview_page'>
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
      <ReserveTable rows={rows} changeActivePage={changeActivePage} columns={columns} />
    </div>
  );
}

export default CandidateInterviews;