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
        }
    }
    return (
        <p>
            {props.children} (
                <span style={styles.timestamp}>{seconds2timetamp(props.start)}</span>
                &nbsp;~&nbsp;
                <span style={styles.timestamp}>{seconds2timetamp(props.end)}</span>
            )
        </p>
    );
};