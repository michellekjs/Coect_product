import Link from "next/link";

import Author from "./Author";

export default function ArticleRecommended(props) {
	const styles = {
		container: {
			// border: '1px solid #e9e9e9',
			borderRadius: 8,
			paddingTop: 5,
			paddingBottom: 20,
			paddingRight: 15,
			paddingLeft: 15,
			marginTop: 5,
			marginBottom: 20,
			textDecoration: "none",
			color: "black",
			backgroundColor: "#FAFAFA",
			boxShadow: '2px 2px 5px 5px #F2F2F2',
			// height:"280px"
			
		},
		top: {
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
		bottom: {
			marginTop: 10,
			height: 80,
			paddingLeft: 5,
			paddingRight: 5,
		},
		title: {
			fontSize: 18,
			fontWeight: "500",
			display: "-webkit-box",
			WebkitBoxOrient: "vertical",
			WebkitLineClamp: 2,
			overflow: "hidden",
			textOverflow: "ellipsis",
		},
		authorContainer: {
			marginTop: 4,
            display: 'flex',
            justifyContent: 'flex-end'
		},
		description: {
			marginTop: 4,
		},
	};

	return (
		<Link
			href={`/article/${props.article.id}`}
			style={{ textDecoration: "none", }}
		>
			<div style={styles.container}>
				<div style={styles.bottom}>
					<div style={styles.title}>{props.article.title}</div>
					<div style={styles.authorContainer}>
						<Author
							small
							name={props.article.channelName}
							image={props.article.channelImageUrl}
						/>
					</div>
					{/* <div style={styles.description}>
                        { props.article.summaries.filter(s => s.subject || s.text)[0].text }
                    </div> */}
				</div>
				<div style={styles.top}>
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
