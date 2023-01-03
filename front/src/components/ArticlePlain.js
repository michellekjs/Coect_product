import React, { useState } from 'react';

import Author from './Author';

const ArticlePlain = props => {

    const styles= {
        container: {
            display: 'flex', 
            maxHeight: 250,
            marginTop: 30,
        },
        left: {
            flex: 1,
            display: 'flex', flexDirection: 'column',
            height: '100%', marginRight: 30,
        },
        title: {
            fontSize: 20, fontWeight: 'bold',
        },
        description: {
            marginTop: 5,
            overflow: 'hidden', textOverflow: 'ellipsis', flex: 1,
        },
        right: {
            width: 240,
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
                <Author />
                <div style={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                </div>
            </div>
            <div style={styles.right}>
                <img style={styles.thumbnail} src="https://via.placeholder.com/360x218"/>
            </div>
        </div>
    )
};

export default ArticlePlain;