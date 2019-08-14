import React, { Fragment } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  StatusBar,
  FlatList,
} from 'react-native'
import { Navigation } from 'react-native-navigation'
import { inject, observer } from 'mobx-react'

// Utils
import { ViewProps } from '../../utils/views'

// Components
import Button from '../../components/Button'

// Constants
import { translate } from '../../constants/i18n'
import { colors } from '../../constants/colors'
import { sizes } from '../../constants/sizes'

// Models
import { IHistoryData } from '../../stores/history/models/HistoryData'

interface RenderItemArgs {
  item: IHistoryData
}

class History extends React.Component<ViewProps> {
  renderItem({ item }: RenderItemArgs) {
    return (
      <Fragment>
        <Text>id: {item.id}</Text>
        <Text>timestamp: {item.timestamp}</Text>
        <Text>application: {item.application}</Text>
        <Text>logo: {item.logo}</Text>
        <Text>status: {item.status}</Text>
      </Fragment>
    )
  }

  render() {
    const { theme } = this.props.store.settings
    const { data } = this.props.store.history
    return (
      <Fragment>
        <StatusBar barStyle='dark-content' />
        <SafeAreaView>
          <View
            style={styles.body}
          >
            <FlatList
              data={data}
              renderItem={this.renderItem}
            />
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
    height: '100%',
  },
})

export default inject('store')(observer(History))
