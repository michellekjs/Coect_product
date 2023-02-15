// TODO: 헤더 부분 왜 width 100% 안되지? ...

"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';

import { categories, colors, brands } from "../shared";

export default function Layout({ children }) {

	const router = useRouter();

	const isBigScreen = useMediaQuery({
    query: '(min-width: 768px)'
  })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	
	// const styles = {
	// 	big: {

	// 	},
	// 	small: {}
	// };

	return (
		<html style={{ width: '100vw' }}>
			<head>
				<title>COECT</title>
			</head>
			<body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', margin:0 }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 30, paddingRight: 30, paddingTop: 16, paddingBottom: 16, width: '95%', alignItems:'center' }}>
					<Link href="/" style={{ display: 'flex', gap: 6, alignItems: 'baseline', textDecoration: 'none' }}>
						<img src={require('../public/imgs/logo.svg').default.src} alt="COECT 로고" style={{ height: 20 }}/>
						<span style={{ fontSize: 11, color: '#424242' }}>Fusion of Video & Text</span>
					</Link>
					{isBigScreen && <div style={{display:'flex', flexDirection: 'row', gap: 10 }}>
						{brands.map((brand, index) => {
							return (
								<Link
									key={index + 1}
									href={`/category/${index + 1}`}
									style={{ textDecoration: 'none', color: '#424242', fontSize: 15 }}
								>
									{brand.name}
								</Link>
							);
						})}
					</div>}
					{isMobile && 
					<div>
					<div> Hi </div>
						<Menu>
							<a id="home" >Home</a>
							<a id="about" >About</a>
							<a id="contact">Contact</a>
						</Menu>
						</div>
					}
					
				</div>
				{children}

				<br />
				<br />
				<div style={{ textAlign: "center", color: "#aaa" }}>© 2023 Coect</div>
				<br />
			</body>
		</html>
	);
}
