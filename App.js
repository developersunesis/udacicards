import React from 'react';
import { StatusBar, View } from 'react-native'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import reducer from './reducers'

import BottomNavigation from './components/BottomNavigation'
import DeckView from './components/DeckView';
import { colorPrimary, white } from './utils/colors';
import AddCard from './components/AddCard';
import TakeQuiz from './components/TakeQuiz';

const Stack = createStackNavigator()

function MyStatusBar({ backgroundColor, props }) {

  return (
      <View>
          <View style={{ backgroundColor, height: 10 }}>
              <StatusBar translucent backgroundColor={backgroundColor} {...props} />
          </View>
      </View>
  )
}

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <NavigationContainer>
        <MyStatusBar backgroundColor={colorPrimary} />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colorPrimary,
            },
            headerTintColor: white,
          }}
          initialRouteName="Home">
          <Stack.Screen name="Udaci-Cards" component={BottomNavigation} />
          <Stack.Screen name="DeckView" component={DeckView} options={{ title: "Deck View" }} />
          <Stack.Screen name="AddCard" component={AddCard} options={{ title: "Add Flashcard" }} />
          <Stack.Screen name="TakeQuiz" component={TakeQuiz} options={{ title: "Take Quiz" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}