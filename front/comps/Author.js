export default function Author(props) {
    const styles = {
        author: {
            display: 'flex', alignItems: 'center', gap: props.small ? 6 : 8
        },
        authorImage: {
            borderRadius: '50%',
            width: props.small ? 20 : 30, height: props.small ? 20 : 30,
        },
        authorName: {
            fontWeight: props.small ? 'normal' : 'bold',
        },
    }

    return (
        <div style={styles.author}>
            <img style={styles.authorImage} src="https://via.placeholder.com/30x30"/>
            <div style={styles.authorName}>{props.name || '유튜버 MZ Tech'}</div>
        </div>
    )
};