import React from 'react'
import { Navigation } from 'react-native-navigation'

// Views
import App from './views/First'
import NewUser from './views/NewUser'
import ExistingUser from './views/ExistingUser'
import History from './views/History'

// Constants
import * as Screens from './constants/screenIds'

// Store
import store from './stores'

// Utils
import { screenWrapper } from './utils/screens'
import { goToFirstScreen } from './utils/navigation';

const registerScreens = () => {
  Navigation.registerComponent(Screens.SCREEN_FIRST, () => screenWrapper(App, store), () => App)
  Navigation.registerComponent(Screens.SCREEN_NEW_USER, () => screenWrapper(NewUser, store), () => NewUser)
  Navigation.registerComponent(Screens.SCREEN_EXISTING_USER, () => screenWrapper(ExistingUser, store), () => ExistingUser)
  Navigation.registerComponent(Screens.SCREEN_HISTORY, () => screenWrapper(History, store), () => History)
}

registerScreens()

// Navigation.setDefaultOptions({
//   bac
// })

Navigation.events().registerAppLaunchedListener(async () => {
  // TODO: Make auth and transfer accordingly
  goToFirstScreen()
})
