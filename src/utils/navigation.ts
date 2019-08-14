import { Navigation } from 'react-native-navigation'

// Constants
import * as Screens from '../constants/screenIds'
import { translate } from '../constants/i18n'

export const goToFirstScreen = () => {
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
}

export const goToNewUser = (componentId: string) => {
  Navigation.push(componentId, {
    component: {
      name: Screens.SCREEN_NEW_USER,
      options: {
        topBar: {
          title: {
            text: translate('First.iAmNew'),
          },
          backButton: {
            title: translate('general.back')
          }
        }
      }
    }
  })
}

export const goToExistingUser = (componentId: string) => {
  Navigation.push(componentId, {
    component: {
      name: Screens.SCREEN_EXISTING_USER,
      options: {
        topBar: {
          title: {
            text: translate('general.importAccount'),
          },
          backButton: {
            title: translate('general.back')
          }
        }
      }
    }
  })
}

export const goToHistory = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: Screens.SCREEN_HISTORY,
            options: {
              topBar: {
                title: {
                  text: translate('History.title')
                }
              }
            }
          },
        }]
      }
    }
  })
}
