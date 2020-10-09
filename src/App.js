import React from 'react'
import './App.css';
import NavigationBar from './NavigationBar';
import ProfileMedium from './ProfileMedium';

function App ()
{
  return (
    <div className={`react-root`}>
      <NavigationBar />
      <div className='left'>
        <span>Welcome Cindy!</span>
        <br>
        </br>
        <span>Enter Birthday messages for your team</span>
        <div className='profileSection'>
          <ProfileMedium name='Sam Ho'  birthday='27-09-1978' src='https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco/v1468279598/hem0wowsouit3qf45vng.png' />
          <ProfileMedium name='Wong May Ling' birthday='27-09-2000' src='https://pbs.twimg.com/profile_images/590312242760929280/IN-cgRmY_400x400.jpg' />
          <ProfileMedium name='Jenny Siow' birthday='27-09-1909' src='https://cachedimages.podchaser.com/512x512/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tLzM0Y2Y4Y2EyMTE4OTMyODAwYzdkYjVmYjFlZTMxNWY4LnBuZw%3D%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D' />
          <ProfileMedium name='Michael Jesson' birthday='27-09-1221' src='https://pbs.twimg.com/profile_images/3231432691/9973535c9ec49b416a0e700e8190ce1b_400x400.jpeg' />
        </div>
        {/* <h1>Hi Babe!</h1>
        <ColorChangeButton color='red' setColor={setColor}/>
        <ColorChangeButton color='blue' setColor={setColor}/>
        <ColorChangeButton color='yellow' setColor={setColor}/> */}
      </div>
    </div>
  );
}

export default App;
