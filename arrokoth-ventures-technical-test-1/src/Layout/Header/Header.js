import React,{useState,useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {

    const refreshData = () => {
        return props.fetchingData();
    }

    return(
        <div className="flex flex-row h-24 w-full bg-gray-800">
            <div className="flex w-full">
                <div className="m-2">
                    <Link to="/page-a">
                        <button
                            className="w-14 md:w-auto h-full bg-gray-200 rounded-lg hover:bg-gray-400"
                        >
                            PageA
                        </button>
                    </Link>
                </div>
                <div className="m-2">
                    <Link to="/page-b">
                        <button
                            className="w-14 md:w-auto h-full bg-gray-200 rounded-lg hover:bg-gray-400"
                        >
                            PageB
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row-reverse">
                <div className="m-2">
                    <button
                        className="w-14 h-full bg-gray-200 rounded-lg hover:bg-gray-400"
                        onClick={refreshData}
                    >
                        <FontAwesomeIcon icon={faSync} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header);