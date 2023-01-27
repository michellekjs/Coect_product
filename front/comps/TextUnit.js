function seconds2timetamp(seconds) {
	var hours = Math.floor(seconds / 3600);
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	seconds = seconds % 60;
	// return hours + ":" + minutes + ":" + seconds;

	return (
		minutes.toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		}) +
		":" +
		seconds.toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		})
	);
}

export default function TextUnit(props) {
	const styles = {
		timestamp: {
			color: "#18436B",
			textDecoration: "none",
		},
	};
	return (
		<p style={{ lineHeight: 2 }}>
			{props.subject && (
				<b style={{ fontWeight: "bold" }}>{props.subject} </b>
			)}
			(<a href="#" style={styles.timestamp}>
				{seconds2timetamp(props.start)}
			</a>
			&nbsp;~&nbsp;
			<a href="#" style={styles.timestamp}>
				{seconds2timetamp(props.end)}
			</a>)
			<div> {props.children} </div>
		</p>
	);
}
