import React, { useState } from 'react';

const Author = props => {
    const styles = {
        author: {
            display: 'flex', alignItems: 'center', gap: 8
        },
        authorImage: {
            borderRadius: '50%',
            width: 30, height: 30,
        },
        authorName: {
            fontWeight: 'bold',
        },
    }

    return (
        <div style={styles.author}>
            <img style={styles.authorImage} src="https://via.placeholder.com/30x30"/>
            <div style={styles.authorName}>유튜버 MZ Tech</div>
        </div>
    )
};

export default Author;