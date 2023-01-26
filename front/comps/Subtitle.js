import Author from './Author';

export default function Subtitle({ article }) {
    const styles = {
        link: {
            textDecoration: 'none', color: 'black'
        },
        subtitle: {
            display: 'flex', alignItems: 'center', gap: 10,
            marginTop: 5
        },
        date: {
            color: '#a0a0a0',
            textDecoration: 'none'
        },
    }

    return (
        <a href={`https://www.youtube.com/${article.channelId}`} target="_blank" style={styles.link}>
            <div style={styles.subtitle}>
                <Author name={article.channelName} image={article.channelImageUrl}/>
                <div style={styles.date}>2022.12.12</div>
            </div>
        </a>
    )
};