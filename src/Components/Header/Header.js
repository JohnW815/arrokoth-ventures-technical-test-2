import React from 'react';

const Header = (props) => {
    return (
        <div className="h-18 w-screen">
            <div className="flex flex-row">
                <img src="/" alt="I'm Logo" />
                <div className="p-2">New</div>
                <div className="p-2">View</div>
                <div className="p-2">Edit</div>
            </div>
        </div>
    );
};

export default Header;