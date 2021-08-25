import React from 'react';

import './app-header.css';
const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Hello, Maksym Byhckiv</h1>
            <h2>{allPosts} posts, You've liked {liked}</h2>
        </div>
    )
}

export default AppHeader;