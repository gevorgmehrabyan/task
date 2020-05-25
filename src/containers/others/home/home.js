import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';
import back from '../../assets/images/back.png';
import EventTab from '../../elements/EventTab/EventTab';
import useEventsInfo from '../../Hooks/useEnevtsInfo';

const Home = (props) => {
  const {data} = useEventsInfo();

  return (
    <div className='home_page'>
      <div className='home_background'>
        <div className='advice_registration'>
          <div className='info_div'>
            <h1>Sed et vehicula urna</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <Link to={'/registration/candidate'}>
              <button>REGISTER NOW</button>
            </Link>
          </div>
          <div className='image_wrap'>
            <img src={back} alt='background_image'/>
          </div>
        </div>
      </div>
      <div className='employers_wrap'>
        <h2>UPCOMING EVENTS</h2>
        <p>Fusce orci dui, accumsan sed odio at, molestie molestie ipsum. Nullam nec congue tortor. Maecenas tincidunt
          ullamcorper ultricies. Duis consectetur nisl leo.
        </p>
        <div className='custom_work'>
          {
            data.map((item, id) => {
              return <EventTab item={item} key={id}/>
            })
          }
        </div>
        <Link to={'/registration/employer'}>
          <button>Register as Employer</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;