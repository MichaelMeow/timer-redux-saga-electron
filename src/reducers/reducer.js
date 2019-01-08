import { duration } from 'moment'
import { compose, multiply, not, prop } from 'ramda'

export default (
  state = {
    status: 'Stopped',
    seconds: 0
  }, action) => {
  const newState = Object.assign(state)
  switch (action.type) {
    case 'START':
      return Object.assign({}, state, {
        status: 'Running'
      })
    case 'STOP':
      return Object.assign({}, state, {
        status: 'Stopped'
      })
    case 'TICK':
      return Object.assign({}, state, {
        seconds: state.seconds + 1
      })
    case 'RESET':
      return Object.assign({}, state, {
        seconds: 0
      })
    default:
      return state
  }
}

export const getFormattedTime = (state) => formatTime(state.seconds * 1000)

export const getStatus = (state) => state.status

/* Private helpers */

// pad :: Number -> String
const pad = (t) => t < 10 ? `0${t}` : `${t}`

// formatMoment :: Moment -> String
const formatMoment = (m) => `${pad(m.minutes())}:${pad(m.seconds())}`

// formatTime :: Number -> String
const formatTime = compose(formatMoment, duration)
