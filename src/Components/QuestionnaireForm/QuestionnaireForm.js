import React from 'react';
import QuestionnaireComponent from '../QuestionnaireComponent/QuestionnaireComponent';

const QuestionnaireForm = (props) => {

    const questionnaireForm = []

    var questionList = props.data.questions;

    for(let i = 0; i < questionList.length ;i++){
        questionnaireForm.push(<QuestionnaireComponent />);
    }

    return(
        <div className="container mx-auto">
            {questionnaireForm}
        </div>
    )
}

export default QuestionnaireForm;