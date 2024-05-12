import React from 'react';
import Navbar from '../../components/navbar/Navbar.Components';
import './Home.css'
import Banner from '../../components/banner/Banner.Components';
import Footer from '../../components/footer/Footer.Components';
import Introduce from '../../components/introduce/Introduce.Components';


interface HomePageProps {
    children?: React.ReactNode;
}

const HomePage: React.FC<HomePageProps> = ({ children }) => {
  return <div className='home-wrapper '>
    <Banner />
    <Introduce />
    <Footer />
  {children}
  </div>
 
};

export default HomePage;