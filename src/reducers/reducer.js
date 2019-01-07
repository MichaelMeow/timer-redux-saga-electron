import { duration } from 'moment'
import { compose, multiply, not, prop } from 'ramda'

export default (
  state = {
    status: 'Stopped',
    seconds: 0
  }, action) => {
  switch (action.type) {
    case 'START':
      console.log("change status to running")
      return state
    case 'STOP':
      return state
    case 'TICK':
      return state
    case 'RESET':
      return state
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
