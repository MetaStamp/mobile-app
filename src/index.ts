import React from 'react'
import { Navigation } from 'react-native-navigation'

// Views
import App from './views/First'
import NewUser from './views/NewUser'
import ExistingUser from './views/ExistingUser'

// Constants
import * as Screens from './constants/screenIds'

// Store
import store from './stores'

// Utils
import { screenWrapper } from './utils/screens'

const registerScreens = () => {
  Navigation.registerComponent(Screens.SCREEN_FIRST, () => screenWrapper(App, store), () => App)
  Navigation.registerComponent(Screens.SCREEN_NEW_USER, () => screenWrapper(NewUser, store), () => NewUser)
  Navigation.registerComponent(Screens.SCREEN_EXISTING_USER, () => screenWrapper(ExistingUser, store), () => ExistingUser)
}

registerScreens()

// Navigation.setDefaultOptions({
//   bac
// })

Navigation.events().registerAppLaunchedListener(async () => {
  // TODO: Make auth and transfer accordingly

  // Navigation.setRoot({
  //   root: {
  //     component: {
  //       name: Screens.SCREEN_FIRST
  //     }
  //   }
  // })

  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: Screens.SCREEN_FIRST,
            options: {
              topBar: {
                visible: false
              }
            }
          },
        }]
      }
    }
  })
})
