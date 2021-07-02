import React from 'react';
import {withRouter} from 'react-router-dom';

import firebase from '../../Config/firebase';

import QuestionnaireForm from '../../Components/QuestionnaireForm/QuestionnaireForm'

const db = firebase.firestore();

const ViewQuestionnaire = (props) => {

    var docRef = db.collection("Questionnaire").doc("questionnaire1");

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


    return(
        <div>
            <QuestionnaireForm />
        </div>
    );
}

export default withRouter(ViewQuestionnaire);
