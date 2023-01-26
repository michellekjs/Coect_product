'use client'

import Link from 'next/link';

import { categories } from '../shared';

export default function Layout({ children }) {

    const styles= {
        ccontainer: {
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            fontFamily: 'sans-serif',
        },
        container: {
            width: 1200,
        },
        header: {
            height: 75,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        },
        headerLeft: {
            width: "15%", height: '100%',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            fontSize: 24, fontWeight: 'bold', textDecoration: 'none', color: 'black'
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
            textDecoration: 'none'
        },
        main: {
            display: 'flex'
        },
        categories: {
            width: '15%',
        },
        category: {
            height: 75,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            textDecoration: 'none', color: 'black',
        },
        content: {
            // width: "85%",
            flex: 1,
            // paddingLeft: 20, paddingRight: 20,
            // display: 'flex', flexDirection: 'column'
        }
    };

    const search = (e) => {
        if (e.key === 'Enter') {
            window.location = "/search";
        }
    };

    return (
        <html>
            <head></head>
            <body style={styles.ccontainer}>
                <div style={styles.container}>
                    <div style={styles.header}>
                        <Link href='/' style={styles.headerLeft}>COECT</Link>
                        <div style={styles.headerRight}>
                            <div style={styles.searchBox}>
                                <input style={styles.searchBoxText} type="text" placeholder="컨텐츠 검색" onKeyPress={search}/>
                                <Link href='/search' style={styles.searchIcon}>🔍</Link>
                            </div>
                        </div>
                    </div>
                    <div style={styles.main}>
                        <div style={styles.categories}>
                            {
                                categories.map((category, index) => {
                                    return (
                                        <Link key={index+1} href={`/category/${index+1}`} style={styles.category}>{category}</Link>
                                    )
                                })
                            }
                        </div>
                        <div style={styles.content}>
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
};