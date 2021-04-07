import {SHOW_ALERT, GET_CELLS, SHOW_TIP} from "./types";

const initialState = {
	cells: 0,
	alerts: [],
	tip: null
}

export const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_CELLS:
			return {...state, cells: action.payload}
		case SHOW_TIP:
			return {...state, tip: action.payload}
		case SHOW_ALERT:
			(state.alerts.length > 3) && state.alerts.shift()
			return {...state, alerts: state.alerts.concat([action.payload])}
		default: return state
	}
}