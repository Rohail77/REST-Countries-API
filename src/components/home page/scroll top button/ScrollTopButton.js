import { Fragment, useEffect, useState } from 'react';

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const TRIGGER_POSITION = 1200;
    const handleScrollButtonDisplay = () => {
      if (window.pageYOffset >= TRIGGER_POSITION) setVisible(true);
      if (window.pageYOffset < TRIGGER_POSITION) setVisible(false);
    };
    window.addEventListener('scroll', handleScrollButtonDisplay);
    return () =>
      window.removeEventListener('scroll', handleScrollButtonDisplay);
  }, []);

  const handleClick = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

  return (
    <Fragment>
      {visible && (
        <button className='scroll-top-btn' onClick={handleClick}>
          <img
            src='/resources/images/scroll top button.svg'
            alt='upward arrow'
          />
        </button>
      )}
    </Fragment>
  );
}

export default ScrollTopButton;
