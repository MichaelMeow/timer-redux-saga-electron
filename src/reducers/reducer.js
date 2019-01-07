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
      newState.status = 'Running'
      console.log(newState)
      return newState
    case 'STOP':
      newState.status = 'Stopped'
      console.log(newState)
      return newState
    case 'TICK':
      newState.seconds = state.seconds + 1
      console.log(newState)
      return newState
    case 'RESET':
      newState.seconds = 0
      console.log(newState)
      return newState
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
