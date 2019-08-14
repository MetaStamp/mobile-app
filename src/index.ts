import React from 'react'
import { Navigation } from 'react-native-navigation'

// Screens
import App from './views/First'

// Constants
import * as Screens from './constants/screenIds'

// Store
import store from './stores'

// Utils
import { screenWrapper } from './utils/screens'

const registerScreens = () => {
  Navigation.registerComponent(Screens.SCREEN_FIRST, () => screenWrapper(App, store), () => App)
}

registerScreens()

Navigation.events().registerAppLaunchedListener(async () => {
  // TODO: Make auth and transfer accordingly

  Navigation.setRoot({
    root: {
      component: {
        name: Screens.SCREEN_FIRST
      }
    }
  })
})
