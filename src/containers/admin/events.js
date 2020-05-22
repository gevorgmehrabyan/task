import React from 'react';
import './events.scss';

const AdminEvents  = () => {
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
      <SliderItem item={event} key={id} id={id}/>
    );
  });
  return (
    <div className='event_page'>
      <div className='global_delete'>
        <div className='left_part'>
          <img src={event} alt='event' />
          <p>Event</p>
        </div>
        <div className='right_part'>
          <button className='add_event'>Add New Event</button>
        </div>
      </div>
      <EventSlider
        dotsDisabled={true}
        responsive={responsive}
        showArrows={true}
        children={events}
        autoPlay={false}
      />
      <CreateEvent/>
    </div>
  );
}

export default AdminEvents;