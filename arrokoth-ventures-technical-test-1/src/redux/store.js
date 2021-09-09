import {configureStore} from '@reduxjs/toolkit';
import dataListReducer from './dataListSlice'

export default configureStore({
    reducer:{
        dataList: dataListReducer,
    },
});