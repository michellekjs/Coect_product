import Author from './Author';

export default function Subtitle({ article }) {
    const styles = {
        link: {
            textDecoration: 'none', 
            color: 'black',
            display:'flex',
            justifyContent:'flex-end',
            marginTop:'10px',
            alignItems:'center',

        },
        subtitle: {
            display: 'flex', 
            
            gap: 10,
            marginTop: 5,
            fontSize:'13pt',
        },
        date: {
            color: '#a0a0a0',
            textDecoration: 'none',
            fontSize:'13pt',
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