import React from 'react';
import './Activities.scss';
import '../../../assets/globals/interviewStyle.scss';
import activity from '../../../assets/images/icons/activity.png';
import ReserveTable from '../../../elements/AdminTable/ReserveTable';
import { useAdminActivities } from '../../../Hooks/useAdminActivities';

const AdminActivities = (props) => {
  const {rows, columns} = useAdminActivities();
  return (
    <div className='activities_page'>
      <div className='global_delete'>
        <div className='left_part'>
          <img src={activity} alt='company'/>
          <p>Activities</p>
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
};

export default AdminActivities;