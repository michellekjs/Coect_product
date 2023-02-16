import { colors } from '../shared'

export default function Author(props) {
    const styles = {
        author: {
            display: 'flex', alignItems: 'center', gap: props.verySmall ? 6 : props.small ? 4 : 6,
        },
        authorImage: {
            borderRadius: '50%',
            width: props.verySmall ? 17 : props.small ? 20 : 30, height: props.verySmall ? 17 : props.small ? 20 : 30,
        },
        authorName: {
            fontWeight: props.small ? 'normal' : 'bold',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize : props.verySmall ? 12 : props.small ? 14 : 16,
            color: colors._300
        },
    }

    return (
        <div style={styles.author}>
            <img style={styles.authorImage} src={props.image || "https://via.placeholder.com/30x30"}/>
            <div style={styles.authorName}>{props.name || 'UNDEFINED'}</div>
        </div>
    )
};