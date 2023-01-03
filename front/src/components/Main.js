import React, { useState } from 'react';

import ArticleTop from './ArticleTop';
import ArticlePlain from './ArticlePlain';

const Main = props => {

    return (
        <>
            <ArticleTop />
            <ArticlePlain />
            <ArticlePlain />
            <ArticlePlain />
        </>
    )
};

export default Main;