import React, { useState } from 'react';

import Author from './Author';

const ArticleSummary = props => {

    const styles= {
        container: {
            display: 'flex', 
            width: '100%',
            height: 200,
            marginTop: 30,
        },
        left: {
            flex: 1,
            display: 'flex', flexDirection: 'column',
            // height: 200,
            marginRight: 30,
        },
        title: {
            fontSize: props.top ? 32 : 20, fontWeight: 'bold',
        },
        authorContainer: {
            marginTop: 5,
        },
        description: {
            marginTop: 5, flex: 1,
            textOverflow: 'ellipsis', overflow: 'hidden'
        },
        right: {
            width: props.top ? 360 : 240,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
        },
        thumbnail: {
            borderRadius: 5,
            width: '100%'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.left}>
                <div style={styles.title}>MZ 세대 절반, 플랫폼으로 재테크</div>
                <div style={styles.authorContainer}>
                    <Author />
                </div>
                <div style={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. software like Aldus PageMaker including versions of Lorem Ipsum. software like Aldus PageMaker including versions of Lorem Ipsum. 
                </div>
            </div>
            <div style={styles.right}>
                <img style={styles.thumbnail} src="https://via.placeholder.com/360x218"/>
            </div>
        </div>
    )
};

export default ArticleSummary;