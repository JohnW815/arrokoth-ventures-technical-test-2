import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import React,{useState,useEffect} from 'react';
import * as JsSearch from 'js-search';
import { useDispatch } from 'react-redux'

import Header from "./Layout/Header/Header"
import RouterManagement from "./Layout/RouterManagement/RouterManagement";

import {inputSpotList,inputFutureList} from "./redux/dataListSlice"

function App() {

    const dispatch = useDispatch();

    const search = new JsSearch.Search('name');
    search.addIndex('type');

    const [dataList,setDataList] = useState([]);
    const [spotList,setSpotList] = useState([]);
    const [futureList,setFutureList] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(() => {
        fetchingData();
    },[])

    useEffect(() => {
        setTimeout(fetchingData, 10000);
        console.log(dataList);
        search.addDocuments(dataList);
        //addDocumments to search library

        var currentSpotList = search.search('spot');
        var currentFutureList = search.search('future');

        setSpotList(currentSpotList);
        setFutureList(currentFutureList);
    },[dataList])

    useEffect(() => {
        dispatch(inputSpotList({
            spotList:spotList,
        }));
    },[spotList])

    useEffect(() => {
        dispatch(inputFutureList({
            futureList:futureList,
        }));
    },[futureList])

    const fetchingData = () => {
        fetch("http://localhost:8010/proxy/api/markets")
            .then(response => response.json())
            .then(data => {
                setDataList(data.result)
                setIsLoaded(true)
                console.log("testRefresh")
            })
            .catch(error => {
                console.log(error)
            })
    }


  return (
    <div className="App">
        <Router>
            <Header
                fetchingData={fetchingData}
            />
            <div className="h-auto min-h-screen bg-gray-700">
                {
                    isLoaded&&
                    <RouterManagement />
                }
            </div>
        </Router>
    </div>
  );
}


export default App;
