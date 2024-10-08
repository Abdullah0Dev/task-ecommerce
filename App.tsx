// In App.js in a new project

import * as React from 'react'; 
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Pages/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/store/store'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />  
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
