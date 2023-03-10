import { colors } from "../shared";
import {useMediaQuery} from "react-responsive"
import Image from "next/image"

import { seconds2timestamp } from "../shared";

export default function TextUnit(props) {
		const isDesktop = useMediaQuery({
		query: "(min-width: 1045px)",
	});
	const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });
	const styles = {
		timestamp: {
			color: "#18436B",
			textDecoration: "none",
		},
	};
	return (
		<a
			onClick={() => { props.seekTo(); }} href="#/"
			style={{ 
				display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 16, paddingBottom: 16, paddingLeft: 24, paddignRight: 24, borderRadius: 8,
				borderColor: '#DBDBDB', borderWidth: 1.2, 
				borderStyle: props.isPlaying ? 'hidden' : 'solid',
				background: props.isPlaying ? colors.primaryBG : 'white', 
				textDecoration: "none", color: "black"
			}}
		>
			<div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
				<div style={{ 
					display: 'flex', alignItems: 'center', gap: 4, borderRadius: 6, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8,
					backgroundColor: props.isPlaying? '#2B6F7D' : colors.primaryBG, 
			 }}>
					{
						// props.isPlaying ?
							<Image src={require('../public/imgs/play.svg')} alt="재생 중 아이콘" height={10} width={10}/>
							// :
							// <img src={require('../public/imgs/pause.svg')} alt="일시정지 중 아이콘" style={{ height: 16 }}/>
					}
					
					<span style={{ fontSize: isMobile? 12: 14, color: props.isPlaying ? 'white' : '#212121' }}>{seconds2timestamp(props.start)}</span>
				</div>
				<span style={{ fontSize: isMobile? 18: 20, color: '#212121' }}>{props.topic}</span>
			</div>

			<span style={{ fontSize: isMobile? 14: 16, paddingRight:"10px", lineHeight:2 }}>
				{props.children}
			</span>
		</a>
		// <p style={{ lineHeight: 2 }}>
		// 	{props.topic && (
		// 		<b style={{ fontWeight: "bold" }}>{props.topic} </b>
		// 	)}
		// 	(<a href="#" style={styles.timestamp}>
		// 		{seconds2timestamp(props.start)}
		// 	</a>
		// 	&nbsp;~&nbsp;
		// 	<a href="#" style={styles.timestamp}>
		// 		{seconds2timetamp(props.end)}
		// 	</a>)
		// 	<div> {props.children} </div>
		// </p>
	);
}
