import React, { Component, Fragment } from 'react';
import Media from 'react-responsive';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './EventSlider.scss';
import right from '../../assets/images/icons/right.png';

class EventSlider extends Component {
  state = {
    currentIndex: 0,
  };

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  handleOnDragStart = e => e.preventDefault();

  render() {
    const items = [1, 2, 3, 4, 5];

    const {
      children,
      responsive,
      dotsDisabled,
      autoPlay,
    } = this.props;
    const { currentIndex, galleryItems } = this.state;
    const showDotsDesc =
      !dotsDisabled && items.length > responsive['1024'].items;
    const showDotsMobile =
      !dotsDisabled && items.length > responsive['300'].items;
    return (
      <Fragment>
        <div className="event_slider">
          <h2>Please select an event</h2>
          <Media maxWidth={991}>
            <AliceCarousel
              dotsDisabled={!showDotsMobile}
              buttonsDisabled={true}
              items={galleryItems}
              responsive={responsive}
              slideToIndex={currentIndex}
              onSlideChanged={this.onSlideChanged}
              autoPlay={autoPlay}
              autoPlayInterval={5000}
            >
              {children}
            </AliceCarousel>
          </Media>
          <Media minWidth={992}>
            <AliceCarousel
              dotsDisabled={!showDotsDesc}
              buttonsDisabled={true}
              items={galleryItems}
              responsive={responsive}
              slideToIndex={currentIndex}
              onSlideChanged={this.onSlideChanged}
              autoPlay={autoPlay}
              autoPlayInterval={5000}
            >
              {children}
            </AliceCarousel>
          </Media>
          <div className='right_arrow'>
            <button onClick={() => this.slideNext()}>
              <img src={right} alt='right'/>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EventSlider;
