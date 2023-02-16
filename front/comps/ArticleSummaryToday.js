import Link from "next/link";

import Author from "./Author";
import { colors } from "../shared";


export default function ArticleSummaryToday(props) {
	const styles = {
		container: {
			border: '1px solid #dbdbdb',
			// background: "#fafafa",
            // boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
			borderRadius: 8,
			marginTop: 5,
			marginBottom: 5,
			textDecoration: "none",
			color: "black",
			overflow: "hidden",
			width: "320px"
		},
		top: {
			// marginTop: 10,
			paddingTop: "56.25%", // 16:9
			// background: 'red',
			position: "relative",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			overflow: "hidden",
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
			// height: 80,
			padding: 12,
			display: 'flex',
			flexDirection: 'column',
			gap: 24
		},
		title: {
			fontSize: 18,
			fontWeight: "bold",
			display: "-webkit-box",
			WebkitBoxOrient: "vertical",
			WebkitLineClamp: 2,
			overflow: "hidden",
			textOverflow: "ellipsis",
		},
		authorContainer: {
			// marginBottom: 4,
            // marginTop:4,
			display: "flex",
			// justifyContent: "end",
			alignItems: "center",
			gap: 6,
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
					<img
						style={styles.thumbnail}
						src={
							`https://i.ytimg.com/vi/${props.article.videoId}/hqdefault.jpg` ||
							"https://via.placeholder.com/360x218"
						}
					/>
				</div>
				<div style={styles.bottom}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
						<div style={styles.authorContainer}>
							<Author
								small
								name={props.article.channelName}
								image={props.article.channelImageUrl}
							/>
							<span>|</span>
							<span style={{ fontSize: 14, color: '#919191' }}>{props.article.date.replaceAll('-','.')+'.'}</span>
						</div>
						<div style={styles.title}>{props.article.title}</div>
					</div>
					<div style={{ display: 'flex', gap: 6, fontSize: 14, color: colors.primary }}>
						<span>현대</span>
						<span>코나</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
