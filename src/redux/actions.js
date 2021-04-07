import {GET_CELLS, SHOW_ALERT, SHOW_TIP} from "./types";

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export function getCells (mode) {
	return async(dispatch) => {
		try{
		const response = await fetch("https://demo1030918.mockable.io/")
		let cells = await response.json()
		let count = Object.entries(cells).find(cell => {
			return cell[0] === mode
		})

		dispatch({type: GET_CELLS, payload: count[1].field})
		} catch (e) {
			dispatch({type: SHOW_TIP, payload: "Field is reqired"})
			await sleep(3000)
			dispatch({type: SHOW_TIP, payload: null})
		}
	}
}

export function showAlert (data) {
	return async(dispatch) => {
		dispatch({type: SHOW_ALERT, payload: data})
	}
}