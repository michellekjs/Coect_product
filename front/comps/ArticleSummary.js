import Link from "next/link";

import Subtitle from "./Subtitle";


import { colors } from "../shared";

export default function ArticleSummary(props) {
		
	
	const styles = {
		container: {
			display: "flex",
			width: "90%",
			// height: 200,
			// marginTop: 20,
			// marginBottom: props.top ? 40 : 30,
			textDecoration: "none",
			color: "black",
			// borderRadius: "10px",
			// backgroundColor: "#FAFAFA",
			// padding: "30px",
            // boxShadow: '5px 5px 5px 5px #F9F9F9',
		},
		left: {
			flex: 1,
			display: "flex",
			flexDirection: "column",
            justifyContent: 'space-between',
			// height: 200,
			paddingTop: 8, paddingBottom: 8
			// gap: 26
		},
		title: {
			fontSize: props.top ? 32 : 20,
			fontWeight: "bold",
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
		right: {
			// width: props.top ? 360 : 240,
			width: 200,
			height: 112, // 16:9?
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			overflow: "hidden",
			borderRadius: 12,
            marginLeft: 20
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
					<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 14, color: colors.primary }}>
							<span>현대</span>
							<span style={{ color: '#BDBDBD' }}>&gt;</span>
							<span>그랜저</span>
						</div>
						<div style={styles.title}>{props.article.title}</div>
					</div>
                    <div style={{ display: 'flex', gap: 8}}>
						<span style={{ fontSize: 14, color: colors._400 }}>{props.article.date.replaceAll('-','.')+'.'}</span>
						<span style={{ fontSize: 14, color: colors._200 }}>{props.article.channelName}</span>
                    </div>
				</div>
				<div style={styles.right}>
					<img
						style={styles.thumbnail}
						src={
							`https://i.ytimg.com/vi/${props.article.videoId}/hqdefault.jpg` ||
							"https://via.placeholder.com/360x218"
						}
					/>
				</div>
			</div>}
			
            
		</Link>
	);
}
