import Link from 'next/link';

import Subtitle from './Subtitle';

export default function ArticleSummaryTop(props) {

    const styles= {
        container: {
            display: 'flex', 
            width: '100%',
            // height: 200,
            marginTop: 20, marginBottom: props.top ? 40 : 30,
            textDecoration: 'none', color: 'black',
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
        description: {
            marginTop: 25, flex: 1,
            // display: '-webkit-box',
            // WebkitBoxOrient: 'vertical',
            // WebkitLineClamp: 3,
            // overflow: 'hidden',
            // textOverflow: 'ellipsis',
        },
        descriptionLine: {
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginTop: 10,
            marginBottom: 0
        },
        right: {
            // width: props.top ? 360 : 240,
            // width: 360, height: 202, // 16:9?
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            overflow: 'hidden', 
        },
        thumbnail: {
            borderRadius: 5,
            width: 360, height: 202,
            // height: '100%',
            objectFit: 'cover',
        }
    };

    return (
        <Link href={`/article/${props.article.id}`} style={{ textDecoration: 'none' }}>
            <div style={styles.container}>
                <div style={styles.left}>
                    <div style={styles.title}>{props.article.title}</div>
                    <div style={{ marginTop: 20 }}>

                    </div>
                    <Subtitle article={props.article}/>
                    <div style={styles.description}>
                        { props.article.summaries.filter(s => s.subject || s.text).slice(0,4).map(_ => <p style={styles.descriptionLine}>
                            {_.subject && <span style={{ fontWeight: 'bold' }}>{_.subject}</span>}
                            {_.subject && _.text && <span> </span>}
                            {_.text}
                        </p>) }
                    </div>
                </div>
                <div style={styles.right}>
                    <img style={styles.thumbnail} src={ `https://i.ytimg.com/vi/${props.article.videoId}/hqdefault.jpg` || "https://via.placeholder.com/360x218" }/>
                </div>
            </div>
        </Link>
        
    )
};