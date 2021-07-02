import React from 'react';

import ViewQuestionnaire from '../../ViewQuestionnaire/ViewQuestionnaire'

const Main = (props) => {
    return (
        <div className="h-screen w-screen bg-purple-200">
            <div>
                <ViewQuestionnaire />
            </div>
        </div>
    );
};

export default Main;