import {createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  message: null
}

// Then, handle actions in your reducers:
const errorsSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		// standard reducer logic, with auto-generated action types per reducer
		setErrorNotification: (state, action) => {
			state.error = action.payload
		},
		setMessageNotification: (state, action) => {
			state.message = action.payload
		},
		resetNotifications: (state, action) => {
			state.message = null
			state.error = null
		},
	},
});

export const { setErrorNotification, setMessageNotification, resetNotifications  } = errorsSlice.actions
const {reducer} = errorsSlice
export default reducer