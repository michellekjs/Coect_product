import Link from "next/link";
import Image from "next/image";

import Subtitle from "./Subtitle";

import { useMediaQuery } from "react-responsive";

import style from './hover.module.css';

import { colors } from "../shared";

export default function ArticleSummary(props) {
	const isDesktop = useMediaQuery({
		query: "(min-width: 1045px)",
	});
	const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });

	const myLoader = ({ src }) => {
		return `https://i.ytimg.com/vi/${src}/hqdefault.jpg`
	}

	const styles = {
		container: {
			display: "flex",
			width: "100%",
			// height: 200,
			// marginTop: 20,
			// marginBottom: props.top ? 40 : 30,
			textDecoration: "none",
			color: "black",
			// borderRadius: "10px",
			// backgroundColor: "#FAFAFA",
			// padding: "30px",
            // boxShadow: '5px 5px 5px 5px #F9F9F9',
			height: 124,
			padding: 10
		},
		left: {
			flex: 1,
			display: "flex",
			flexDirection: "column",
            justifyContent: 'space-between',
			// height: 200,
			// paddingTop: 8, paddingBottom: 8
			// gap: 26
		},
		title: {
			fontSize: props.top ? 32 : 20,
			fontWeight: "500",
			display: "-webkit-box",
			WebkitBoxOrient: "vertical",
			WebkitLineClamp: 2,
			overflow: "hidden",
			textOverflow: "ellipsis",
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
			width: 220,
			height: 124, // 16:9?
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
		 <div style={styles.container} className={isMobile ? null : style.logo}>
				<div style={styles.left}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 }}>
							<Link href={`/brand/${props.article.brandNameEng}`} style={{ textDecoration: 'none', color: colors.primary }}>{props.article.brand}</Link>
							<span style={{ color: '#BDBDBD' }}>&gt;</span>
							<Link href={`/brand/${props.article.brandNameEng}?model=${props.article.model}`} style={{ textDecoration: 'none', color: colors.primary }}>{props.article.model}</Link>
						</div>
						<div style={styles.title}>{props.article.title}</div>
					</div>
                    <div style={{ display: 'flex', gap: 8}}>
						<span style={{ fontSize: 14, color: colors._400 }}>{props.article.date.replaceAll('-','.')+'.'}</span>
						<span style={{ fontSize: 14, color: colors._300 }}>{props.article.channelName}</span>
                    </div>
				</div>
				<div style={styles.right}>
					<Image
						style={styles.thumbnail}
						loader= {myLoader}
						src={props.article.videoId}
						width={500}
						height={500}
						alt = "https://via.placeholder.com/360x218"
					/>
				</div>
			</div>
            
		</Link>
	);
}
