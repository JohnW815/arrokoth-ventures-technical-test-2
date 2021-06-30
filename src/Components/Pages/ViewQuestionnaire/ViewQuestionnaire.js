import React,{useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';

import firebase from '../../../Config/firebase';

const db = firebase.firestore();

const ViewQuestionnaire = (props) => {

    const [questionnaire, setQuestionnaire] = useState({});
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(() => {
        console.log(props)
        if( typeof props.location.state !== 'undefined'){
            if( props.location.state.hasOwnProperty('article')){
                setQuestionnaire({...props.location.state.questionnaire})
                setIsLoaded(true)
            }
        }else{
            getQuestionnaireByID(props.match.parms.id)
        }
    },[]);

    const getQuestionnaireByID = (aid) => {
        db.collection('Questionnaire')
            .doc(aid)
            .get()
            .then(doc => {
                if(doc.exist){
                    setQuestionnaire(doc.data())
                    setIsLoaded(true)
                }else{
                    props.history.path({pathname:'/'})
                }
            })
    }

    if(isLoaded){
        return(
            <div>
                {questionnaire.inquirer}
            </div>
        );
    }else{
        return(
             <div>
                is loading...
             </div>
        );
    }
}

export default withRouter(ViewQuestionnaire);
