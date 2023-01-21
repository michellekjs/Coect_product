import Link from 'next/link';

import Author from './Author';

export default function ArticleRecommended(props) {

    const styles= {
        container: {
            border: '1px solid #e9e9e9',
            borderRadius: 8,
            padding: 16,
            marginTop: 10, marginBottom: 20,
            textDecoration: 'none', color: 'black',
        },
        thumbnail: {
            width: '100%',
            borderRadius: 5,
        },
        bottom: {
            marginTop: 8,
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        authorContainer: {
            marginTop: 4,
        },
        description: {
            marginTop: 4, 
        }
    };

    return (
        <Link href="/article" style={{ textDecoration: 'none'}}>
            <div style={styles.container}>
                <div style={styles.top}>
                    <img style={styles.thumbnail} src="https://via.placeholder.com/360x218"/>
                </div>
                <div style={styles.bottom}>
                    <div style={styles.title}>주식 회복되려면 멀었어요.</div>
                    <div style={styles.authorContainer}>
                        <Author small name="MinSso 공동연구"/>
                    </div>
                    <div style={styles.description}>
                        이미 많이 오른 금리, 언제까지 오를까요?
                    </div>
                </div>
            </div>
        </Link>
    )
};