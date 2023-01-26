function seconds2timetamp(seconds) {
    var hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    // return hours + ":" + minutes + ":" + seconds;

    return minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    
    
}

export default function TextUnit(props) {
    const styles = {
        timestamp : {
            color: '#18436B',
            textDecoration: 'none',
        }
    }
    return (
        <p style={{ textIndent: '.5em', lineHeight: 1.5 }}>
            {props.subject && <b>#{props.subject} </b>}
            {props.children} (
                <a href="#" style={styles.timestamp}>{seconds2timetamp(props.start)}</a>
                &nbsp;~&nbsp;
                <a href="#" style={styles.timestamp}>{seconds2timetamp(props.end)}</a>
            )
        </p>
    );
};