import React, {useState, useEffect} from 'react';
import MainNavigation from './navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash/Splash';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 10000);
  }, []);

  return (
    <NavigationContainer>
      {hideSplashScreen ? <MainNavigation /> : <Splash />}
    </NavigationContainer>
  );
};

export default App;
