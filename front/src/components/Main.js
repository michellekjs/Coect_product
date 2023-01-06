import React, { useState } from 'react';

import ArticleSummary from './ArticleSummary';

const Main = props => {

    return (
        <>
            <ArticleSummary top/>
            <ArticleSummary />
            <ArticleSummary />
            <ArticleSummary />
        </>
    )
};

export default Main;