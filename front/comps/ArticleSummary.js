import Link from "next/link";

import Subtitle from "./Subtitle";

export default function ArticleSummary(props) {
	const styles = {
		container: {
			display: "flex",
			width: "90%",
			height: 200,
			marginTop: 20,
			marginBottom: props.top ? 40 : 30,
			textDecoration: "none",
			color: "black",
			borderRadius: "10px",
			backgroundColor: "#FAFAFA",
			padding: "30px",
            boxShadow: '5px 5px 5px 5px #F9F9F9',
		},
		right: {
			flex: 1,
			display: "flex",
			flexDirection: "column",
            justifyContent: 'space-between',
			// height: 200,
		},
		title: {
			fontSize: props.top ? 32 : 18,
			fontWeight: "regular",
		},
		description: {
			marginTop: 5,
			flex: 1,
            fontSize: props.top ? 32 : 14,
			// display: '-webkit-box',
			// WebkitBoxOrient: 'vertical',
			// WebkitLineClamp: 3,
			// overflow: 'hidden',
			// textOverflow: 'ellipsis',
		},
		descriptionLine: {
			display: "-webkit-box",
			WebkitBoxOrient: "vertical",
			WebkitLineClamp: 1,
			overflow: "hidden",
			textOverflow: "ellipsis",
			marginTop: 5,
			marginBottom: 0,
            fontWeight: 'lighter',
		},
		left: {
			// width: props.top ? 360 : 240,
			width: 360,
			height: 202, // 16:9?
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			overflow: "hidden",
			borderRadius: 5,
            marginRight: '20px'
		},
		thumbnail: {
			width: "100%",
			// height: '100%',
			objectFit: "cover",
		},
	};

	return (
		<Link
			href={`/article/${props.article.id}`}
			style={{ textDecoration: "none" }}
		>
			<div style={styles.container}>
				<div style={styles.left}>
					<img
						style={styles.thumbnail}
						src={
							`https://i.ytimg.com/vi/${props.article.videoId}/hqdefault.jpg` ||
							"https://via.placeholder.com/360x218"
						}
					/>
				</div>
				<div style={styles.right}>
					<div style={styles.title}>{props.article.title}</div>
                    <div>
                        <div style={styles.description}>
                            {props.article.summaries
                                .filter((s) => s.subject || s.text)
                                .slice(0, 3)
                                .map((_) => (
                                    <p style={styles.descriptionLine}>
                                        {/* {_.subject && (
                                            <span>#{_.subject}</span>
                                        )} */}
                                        {_.subject && _.text && <span> </span>}
                                        {_.text}
                                    </p>
                                ))}
                        </div>
                        <Subtitle article={props.article} />
                    </div>
				</div>
			</div>
            
		</Link>
	);
}
