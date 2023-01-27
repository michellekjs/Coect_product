import Link from "next/link";

import Author from "./Author";

export default function ArticleSummaryToday(props) {
	const styles = {
		container: {
			// border: '1px solid #e9e9e9',
			background: "#fafafa",
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
			borderRadius: 8,
			paddingLeft: 24,
			paddingRight: 24,
			paddingTop: 24,
			paddingBottom: 33,
			marginTop: 5,
			marginBottom: 5,
			textDecoration: "none",
			color: "black",
		},
		bottom: {
			// marginTop: 10,
			paddingTop: "56.25%", // 16:9
			// background: 'red',
			position: "relative",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			overflow: "hidden",
			borderRadius: 5,
		},
		thumbnail: {
			width: "100%",
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			// objectFit: 'cover',
		},
		top: {
			height: 80,
			paddingLeft: 5,
			paddingRight: 5,
		},
		title: {
			fontSize: 16,
			fontWeight: "bold",
			display: "-webkit-box",
			WebkitBoxOrient: "vertical",
			WebkitLineClamp: 2,
			overflow: "hidden",
			textOverflow: "ellipsis",
		},
		authorContainer: {
			marginBottom: 4,
            marginTop:4,
			display: "flex",
			justifyContent: "end",
		},
		description: {
			marginTop: 4,
		},
	};

	return (
		<Link
			href={`/article/${props.article.id}`}
			style={{ textDecoration: "none" }}
		>
			<div style={styles.container}>
				<div style={styles.top}>
					<div style={styles.title}>{props.article.title}</div>
					<div style={styles.authorContainer}>
						<Author
							small
							name={props.article.channelName}
							image={props.article.channelImageUrl}
						/>
					</div>
				</div>
				<div style={styles.bottom}>
					<img
						style={styles.thumbnail}
						src={
							`https://i.ytimg.com/vi/${props.article.videoId}/hqdefault.jpg` ||
							"https://via.placeholder.com/360x218"
						}
					/>
				</div>
			</div>
		</Link>
	);
}
