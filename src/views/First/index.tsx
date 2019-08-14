import React, { Fragment } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native'

import Button from '../../components/Button'

import { normalize } from '../../utils/size'
import { inject, observer } from 'mobx-react'
import { translate } from '../../constants/i18n'
import { colors } from '../../constants/colors'

class First extends React.Component {
  render() {
    const { theme } = this.props.store.settings
    return (
      <Fragment>
        <StatusBar barStyle='dark-content' />
        <SafeAreaView>
          <View
            style={styles.body}
          >
            <Text style={styles.h1} >{translate('first.welcome')}</Text>

            <View>
              <Text style={styles.label}>{translate('first.labelNewUser')}</Text>
              <Button
                text={"I'm newbe"}
                background={colors[theme].blue}
                onPress={() => {}}
              />
            </View>

            <View>
              <Text style={styles.label}>{translate('first.labelOldUser')}</Text>
              <Button
                text={'Import account'}
                background={colors[theme].green}
                onPress={() => {}}
              />
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%'
  },
  h1: {
    fontSize: normalize(23)
  },
  label: {
    marginBottom: normalize(5)
  }
})

export default inject('store')(observer(First))
