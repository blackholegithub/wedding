import React from "react";
import './Banner.css'

interface BannerProps {
  title?: string;
  message?: string;
}

const Banner: React.FC<BannerProps> = ({ title, message }) => {
  return (
    <>
       <div className="banner-wrapper">
          <img className='img' src="https://cafefcdn.com/thumb_w/640/203337114487263232/2023/4/16/avatar1681656828443-16816568291482035465622.jpg" alt="imgBanner" />
        </div>
    </>
  );
};

export default Banner;
