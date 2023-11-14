import * as React from 'react';
import Home from './screens/Home';
import Feed from './screens/Feed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconNome;
            if(route.name === 'Feed'){
              iconNome = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Home'){
              iconNome = focused ? 'home' : 'home-outline';
            }
            return <Ionicons name={iconNome} size={size} color={color}/>
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Feed' component={Feed}/>
      </Tab.Navigator>
  );
}

export default BottomTabNavigator;