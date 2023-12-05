import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
`;

const ResponsiveImage = ({ mobileImage, desktopImage, alt }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const imageSource = windowWidth <= 555 ? mobileImage : desktopImage;

  return <StyledImage src={imageSource} alt={alt} />;
};

export default ResponsiveImage;