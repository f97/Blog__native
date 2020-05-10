import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

const homeApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchHome() {
  return homeApiClient.get().then((response) => {
    if (in200s(response.status)) {
      return response.data
    }
    return null
  })
}

const archivesApiClient = axios.create({
  baseURL: Config.API_URL + 'archives',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchArchives() {
  return archivesApiClient.get().then((response) => {
    if (in200s(response.status)) {
      return response.data
    }
    return null
  })
}

export const mrsoiService = {
  fetchHome,
  fetchArchives,
}
