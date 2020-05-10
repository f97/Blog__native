import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  avatar: {
    borderRadius: 128 / 2,
    height: 128,
    width: 128,
  },
  avatarWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 150,
  },
  description: {
    ...Fonts.normal,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  error: {
    ...Fonts.normal,
    color: Colors.error,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  instructions: {
    ...Fonts.normal,
    fontStyle: 'italic',
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  nickname: {
    ...Fonts.h1,
    textAlign: 'center',
  },
  timeline: {},
})
