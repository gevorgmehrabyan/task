import React from 'react';
import './settings.scss';

const EmployerSettings  = () => {
  const {eventList} = useEmployerSettings();
  const responsive = {
    1300: { items: 4 },
    1024: { items: 3 },
    800: { items: 2 },
    520: { items: 3 },
    412: { items: 2 },
    300: { items: 1 }
  };
  const events = eventList.map((event, id) => {
    return (
      <SliderItem item={event} key={id}/>
    );
  });

  return (
    <div className='settings_page'>
      <div className='global_delete'>
        <div className='left_part'>
          <img src={setting} alt='profileLogo'/>
          <p>Settings</p>
        </div>
        <div className='right_part'></div>
      </div>
      <EventSlider
        dotsDisabled={true}
        responsive={responsive}
        showArrows={true}
        children={events}
        autoPlay={false}
      />
      <EmployerSetting/>
    </div>
  );
}

export default EmployerSettings;