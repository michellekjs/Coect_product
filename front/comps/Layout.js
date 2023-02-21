// "use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';

import { brands } from "../shared";

export default function Layout({ children }) {

	const router = useRouter();

	const isBigScreen = useMediaQuery({
    query: '(min-width: 1045px)'
  })
  const isMobile = useMediaQuery({ query: '(max-width: 1045px)' })
	const [opacity,setOpacity] = useState(100);

	const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '20px',
      height: '20px',
      right: isMobile ? "16px" : '30px',
      top: ' 20px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      top: "0px",
      height: '100%',
      width : "50%",
    },
    bmMenu: {
      background: '#FAFAFA',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
	// const styles = {
	// 	big: {

	// 	},
	// 	small: {}
	// };

	useEffect(function mount() {
    function onScroll() {
      	setOpacity(window.scrollY)
		// console.log(opacity)
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });


	return (
		// <html style={{ width: '100vw' }}>
		// 	<body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', margin:0 ,overflowX:"hidden" }}>
				
		// 	</body>
		// </html>

		<div style={{ width: '100%', overflow:"clip" }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 30, paddingRight: 30, paddingTop: 16, paddingBottom: 16, boxSizing: 'border-box', width: '100%', alignItems:'center', position:"sticky", top: 0, zIndex:10, backgroundColor:"white", opacity: opacity<350 ? 1 : 0.8 }}>
				<Link href="/" style={{ display: 'flex', gap: 6, alignItems: 'baseline', textDecoration: 'none' }}>
					<img src={require('../public/imgs/logo.svg').default.src} alt="COECT 로고" style={{ height: 26 }}/>
				</Link>
				{isBigScreen && <div style={{display:'flex', flexDirection: 'row', gap: 10 }}>
					{brands.map((brand, index) => {
						return (
							<Link
								key={index + 1}
								href={`/brand/${brand.nameEng}`}
								style={{ textDecoration: 'none', color: '#424242', fontSize: 15 }}
							>
								{brand.name}
							</Link>
						);
					})}
				</div>}
				{isMobile && 
				<div>
					<Menu right styles={styles}>
						{brands.map((brand) => {
						return (
							<Link
								key={brand.id}
								href={`/brand/${brand.nameEng}`}
								style={{ textDecoration: 'none', color: '#424242', fontSize: 15, marginBottom : 10 }}
							>
								{brand.name}
							</Link>
						);
					})}
					</Menu>
					</div>
				}
				
			</div>
			<div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				{children}
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div style={{ textAlign: "center", color: "#aaa" }}>© 2023 Coect</div>
			<br />
			<br />
		</div>
	);
}
