import React, { useEffect } from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

const ArchivesScreen = (props) => {
  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}

ArchivesScreen.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ArchivesScreen)
