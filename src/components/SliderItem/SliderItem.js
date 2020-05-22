import React from 'react';
import './SliderItem.scss';
import { Checkbox , Dropdown, Menu} from 'antd';
import eventCalendar from '../../assets/images/icons/eventCalendar.png';
import more from '../../assets/images/icons/more.png';
import { useLocation } from 'react-router-dom';

const SliderItem = ({ item , id}) => {
  const handleElection =(id) =>{
    console.log('you clicked on', id)
  }

  const menu = (
    <Menu>
      <div className='cube_wrap'><div></div></div>
      <Menu.Item key="0">
        <p onClick={() => handleElection(id)}>Edit</p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <p>Assign Employers</p>
      </Menu.Item>
    </Menu>
  );
  const location = useLocation();
  return (
    <div className='simple_event_form'>
      <div className='checkbox_or_edit'>
        {
          location.pathname === '/admin/event'
            ?
            <Dropdown
              overlay={menu}
              trigger={['click']}
              overlayClassName='overlay'
              placement='bottomRight'
            >
              <img src={more} alt='more' />
            </Dropdown>
            :
            <Checkbox/>
        }
      </div>
      <div className='event_logo_item'>
        <hr/>
        <div>
          {
            item.logo ? <img src={item.logo} alt='event_logo'/> : 'LOGO'
          }
        </div>
        <hr/>
      </div>
      <div className='event_information'>
        <p>{item.eventLocation}</p>
        <h3>{item.eventName}</h3>
        <div>
          <img src={eventCalendar} alt='event_Calendar'/>
          {item.eventDate}
        </div>
      </div>
    </div>
  );
};

export default SliderItem;