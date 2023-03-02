import { colors } from "../shared";
import Image from "next/image";

export default function Author(props) {
	const myLoader = ({ src }) => {
		return src;
	};

	const styles = {
		author: {
			display: "flex",
			alignItems: "center",
			gap: props.verySmall ? 6 : props.small ? 4 : 6,
		},
		authorImage: {
			borderRadius: "50%",
			width: props.verySmall ? 17 : props.small ? 20 : 23,
			height: props.verySmall ? 17 : props.small ? 20 : 23,
		},
		authorName: {
			fontWeight: "400",
			display: "-webkit-box",
			WebkitBoxOrient: "vertical",
			WebkitLineClamp: 1,
			overflow: "hidden",
			textOverflow: "ellipsis",
			fontSize: props.verySmall ? 12 : props.small ? 14 : 16,
			color: colors._300,
		},
	};

	return (
		<div style={styles.author}>
			{/* <img style={styles.authorImage} src={props.image || "https://via.placeholder.com/30x30"}/> */}
			<Image
				style={styles.authorImage}
                loader={myLoader}
				src={props.image}
				alt="https://via.placeholder.com/30x30"
				width={30}
				height={30}
				
			/>
			<div style={styles.authorName}>{props.name || "UNDEFINED"}</div>
		</div>
	);
}
