import { createSlice } from '@reduxjs/toolkit'

const dataListSlice = createSlice({
    name: 'dataList',
    initialState:{
        spotList:{},
        futureList:{}
    },
    reducers: {
        inputSpotList:(state,action) => {
            state.spotList = action.payload.spotList
        },
        inputFutureList:(state,action) => {
            state.futureList = action.payload.futureList
        },
    },
})

export const {
    inputSpotList,
    inputFutureList
} = dataListSlice.actions

export default dataListSlice.reducer