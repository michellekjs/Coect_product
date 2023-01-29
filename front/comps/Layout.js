"use client";

import Link from "next/link";
import { useRouter } from "next/router";

import { categories, colors } from "../shared";

export default function Layout({ children }) {

	const router = useRouter();
	
	const styles = {
		ccontainer: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			fontFamily: "sans-serif",
		},
		container: {
			width: "70%",
		},
		header: {
			height: 110,
			// width: '100%',
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
		},
		headerLeft: {
			height: "100%",
			display: "flex",
			justifyContent: "start",
			alignItems: "center",
			fontSize: 24,
			fontWeight: "bold",
			textDecoration: "none",
			color: "black",
		},
		// headerRight: {
		//     // flex: 1
		// },
		searchBox: {
			width: 250,
			height: 46,
			display: "flex",
			// justifyContent: "space-between",
			alignItems: "center",
			border: "1px solid #e0e0e0",
			borderRadius: 5,
            height: "100%",
            marginLeft:"80px"
		},
		searchBoxText: {
			flex: 1,
			paddingLeft: 15,
			border: "none",
			outline: "none",
			fontSize: 15,
		},
		searchIcon: {
			height: 40,
			paddingLeft: 15,
			paddingRight: 15,
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			textDecoration: "none",
		},
		main: {
			display: "flex",
		},
		categories: {
			height: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
            marginTop:"10px"
		},
		category: {
			height: "100%",
			width: 100,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			textDecoration: "none",
			color: "black",
		},
		content: {
			// width: "85%",
			flex: 1,
			// paddingLeft: 20, paddingRight: 20,
			// display: 'flex', flexDirection: 'column'
		},
	};

	return (
		<html>
			<head>
				<title>COECT</title>
			</head>
			<body style={styles.ccontainer}>
				<div style={styles.container}>
					<div style={styles.header}>
						<Link href="/" style={styles.headerLeft}>
							COECT
						</Link>
						<div style={{display:'flex', flexDirection: 'row'}}>
							<div style={styles.categories}>
								{categories.map((category, index) => {
									return (
										<Link
											key={index + 1}
											href={`/category/${index + 1}`}
											style={styles.category}
										>
											{category}
										</Link>
									);
								})}
							</div>

							<div style={styles.searchBox}>
								<input
									style={styles.searchBoxText}
									type="text"
									placeholder="콘텐츠 검색"
									onKeyPress={e => {
										if (e.key === "Enter") {
											router.push(`/search`)
										}
									}}
								/>
								<Link href="/search" style={styles.searchIcon}>
									🔍
								</Link>
							</div>
						</div>
					</div>
					{children}

					<br />
					<br />
					<div style={{ textAlign: "center", color: "#aaa" }}>© 2023 Coect</div>
					<br />
				</div>
			</body>
		</html>
	);
}
