import React from 'react';
import Main from './Main'
import AddDeck from './AddDeck';
import { colorPrimary } from '../utils/colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

class BottomNavigation extends React.Component {

    render() {
      return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = 'md-add'
  
              if (route.name === 'All Decks') {
                iconName = focused ? 'ios-list-box' : 'ios-list'
              }
  
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
  
          tabBarOptions={{
            activeTintColor: colorPrimary,
            inactiveTintColor: 'gray',
          }}
  
          initialRouteName="Main">
  
          <Tab.Screen name="All Decks" component={Main} />
          <Tab.Screen name="Add Deck" component={AddDeck} />
  
        </Tab.Navigator>
      )
    }
  }

  export default BottomNavigation