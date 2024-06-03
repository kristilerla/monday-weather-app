import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const WeatherIcon = ({
  icon = 'CLEAR_DAY',
  color = 'goldenrod',
  size = 64,
  animate = true,
}) => {
  return (
    <ReactAnimatedWeather
      icon={icon}
      color={color}
      size={size}
      animate={animate}
    />
  );
};

export default WeatherIcon;

