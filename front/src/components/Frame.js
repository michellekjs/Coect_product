import React, { useState } from 'react';

const Main = props => {

    const styles= {
        ccontainer: {
            display: 'flex', justifyContent: 'center', alignItems: 'center',
        },
        container: {
            maxWidth: 1200,
        },
        header: {
            height: 75,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        },
        headerLeft: {
            width: "15%",
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            fontSize: 20, fontWeight: 'bold'
        },
        headerRight: {
            // flex: 1
        },
        searchBox: {
            width: 250, height: 30,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            border: '1px solid #e0e0e0', borderRadius: 5,
        },
        searchBoxText: {
            flex: 1, paddingLeft: 10,
            border: 'none', outline: 'none', fontSize: 15,
        },
        searchIcon: {
            height: 40, paddingLeft: 10, paddingRight: 10,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        },
        main: {
            display: 'flex'
        },
        categories: {
            width: 100
        },
        category: {
            height: 75,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
        },
        content: {
            // width: "85%",
            flex: 1,
            paddingLeft: 20, paddingRight: 20,
            // display: 'flex', flexDirection: 'column'
        }
    };

    return (
        <div style={styles.ccontainer}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <div style={styles.headerLeft}>COECT</div>
                    <div style={styles.headerRight}>
                        <div style={styles.searchBox}>
                            <input style={styles.searchBoxText} type="text" placeholder="컨텐츠 검색"/>
                            <div style={styles.searchIcon}>🔍</div>
                        </div>
                    </div>
                </div>
                <div style={styles.main}>
                    <div style={styles.categories}>
                        {
                            ['애완동물', '재테크', '스포츠', '패션', '시사', '경제', '뷰티', '힐링'].map((category, index) => {
                                return (
                                    <div style={styles.category}>{category}</div>
                                )
                            })
                        }
                    </div>
                    <div style={styles.content}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;