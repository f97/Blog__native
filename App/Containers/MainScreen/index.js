import React, { useEffect } from 'react'
import { Text, View, ActivityIndicator, Image, Button } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import MainActions from 'App/Stores/MainScreen/Actions'
import Style from './style'
import { Images } from 'App/Theme'

const MainScreen = (props) => {
  const _fetchHome = () => {
    props.fetchHome()
  }

  useEffect(() => {
    _fetchHome()
  }, [])

  return (
    <View style={[]}>
      {props.homeIsLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <View style={Style.avatarWrap}>
            <Image style={Style.avatar} source={Images.avatar} />
          </View>
          <View>
            <Text style={Style.nickname}>{props.home.nickname}</Text>
            <Text style={Style.description}>{props.home.description}</Text>
            <Button
              style={Style.timeline}
              onPress={() => props.navigation.navigate('ArchivesScreen')}
              title="Timeline"
            />

            <Text style={Style.error}>{props.homeErrorMessage}</Text>
          </View>
        </View>
      )}
    </View>
  )
}

MainScreen.propTypes = {
  home: PropTypes.object,
  homeIsLoading: PropTypes.bool,
  homeErrorMessage: PropTypes.string,
  fetchHome: PropTypes.func,
  navigation: PropTypes.object,
}

const mapStateToProps = (state) => ({
  home: state.example.home,
  homeIsLoading: state.example.homeIsLoading,
  homeErrorMessage: state.example.homeErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchHome: () => dispatch(MainActions.fetchHome()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
