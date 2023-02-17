
import Layout from "../comps/Layout";
import ArticleSummaryHot from '../comps/ArticleSummaryHot';
import ArticleSummaryTop from "../comps/ArticleSummaryTop";
import ArticleSummaryToday from "../comps/ArticleSummaryToday";
import { useMediaQuery } from "react-responsive";
import styles from "../comps/hover.module.css"


import { articles, categories, brands, colors } from "../shared";
export default function MainPage() {
	const isBigScreen = useMediaQuery({
		query: "(min-width: 1045px)",
	});
	const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });

	const channelPicks = [
		{
			category: 1,
			channelImageUrl:
				"https://yt3.googleusercontent.com/ytc/AL5GRJWqd-QcTkiv4GAJ9eEQgNuF7eWRpHSCdUGL1EsqHQ=s176-c-k-c0x00ffffff-no-rj",
			channelName: "삼프로TV_경제의신과함께",
			channelId: "@3protv",
			channelDescription: "'경제의 신과함께' 3PROTV입니다.",
		},
		{
			category: 2,
			channelImageUrl:
				"https://yt3.googleusercontent.com/ytc/AL5GRJVx1xu-0KtWJ2wAfWh2KnKt5Sa85gK78tlj-KVD=s176-c-k-c0x00ffffff-no-rj",
			channelName: "트립콤파니",
			channelId: "@tripcompany93",
			channelDescription: "지구라는 행성 여행의 백과사전이 되고자 합니다.",
		},
		{
			category: 3,
			channelImageUrl:
				"https://yt3.googleusercontent.com/ytc/AL5GRJVN-ClLa8cOLnYO9QYbqJnzl-pOOa2qQSmhKA-XIQ=s176-c-k-c0x00ffffff-no-rj",
			channelName: "주연 ZUYONI",
			channelId: "@zuyoni1",
			channelDescription: "기술은 우리의 경험을 어떻게 바꿀까요?",
		},
		{
			category: 4,
			channelImageUrl:
				"https://yt3.googleusercontent.com/PLcb4E4kmku90sZvPUgfYlZC2N_b6O5C5NeMeecC7cY_ZnOi_38tHpuNdEa2MkP8cr9BnuRg2A=s176-c-k-c0x00ffffff-no-rj",
			channelName: "레어리RareLee",
			channelId: "@RareLee",
			channelDescription: "스타일 컨설턴트  RareLee 입니다 :)",
		},
		{
			category: 5,
			channelImageUrl:
				"https://yt3.googleusercontent.com/ytc/AL5GRJXaE02Phk_SsOB8I8fwk5IAu-2NENkG3plXdW042A=s176-c-k-c0x00ffffff-no-rj",
			channelName: "김한용의 MOCAR",
			channelId: "@mocar_official",
			channelDescription:
				"유튜브, 컨텐트, 그리고 세상을 흥미롭게 바라보는 김한용의 채널입니다.",
		},
	];

	const randomArticles = articles.sort(() => Math.random() - 0.5);
	return (
		<Layout>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 180,
					alignItems: "center",
					width: "100vw",
				}}
			>
				<div
					style={{
						width: "100%",
						height: isMobile? 180 : 358,
						backgroundSize: "cover",
						backgroundImage: `url('${require(`../public/imgs/cover.png`).default.src}')`,
						display: "flex",
						backgroundPosition:"center",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: "row",
						textAlign: "center",
						marginLeft: 0,

					}}
				>
					<img src={require('../public/imgs/arrow_left.svg').default.src} alt={`왼쪽으로 전환`} style={{ height: 16, marginLeft: 60 }}/>
					<div style={{ fontSize: isMobile? 16 : 28, color: "white" }}>
						세단 제왕의 귀환, 풀체인지 그랜져 리뷰 영상들 보러 가기
					</div>
					<img src={require('../public/imgs/arrow_right.svg').default.src} alt={`오른쪽으로 전환`} style={{ height: 16, marginRight: 60 }}/>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 180,
						maxWidth: 1032,
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 60,
						}}
					>
						<div style={{ fontSize: 22, fontWeight: 500}}>차량 리뷰 Pick 👍</div>
							<div style={{ display: "flex", alignItems: "center", flexDirection: isMobile? "column":"row", gap: isMobile? 20: 36, width: isMobile? "80%": "100%" }}>
								{randomArticles.slice(1, 4).map((article) => (
									<div key={article.id} style={{ flex: 1 }}>
										<ArticleSummaryToday key={article.id} article={article} />
									</div>
								))}
							</div>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 60,
						}}
					>
						<div style={{ fontSize: 22, fontWeight: 500 }}>차량 리뷰 찾아보기 🔎</div>
						{isBigScreen && (
							<div
								style={{
									width: 940,
									display: "flex",
									alignItems: "center",
									gap: 36,
									justifyContent: "space-between",
								}}
							>
								{brands.map((brand) => (
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											gap: 4,
											justifyContent: "center",
											alignContent: "center",
											textAlign: "center",
										}}
									>
										<img
											src={
												require(`../public/imgs/logos/${brand.logo}`).default
													.src
											}
											alt={`${brand.name} 로고`}
											style={{ width: 60, height: 60 }}
											className={styles.logohover}
										/>
										<span style={{ fontSize: 16 }}>{brand.name}</span>
									</div>
								))}
							</div>
						)}
						{isMobile && (
							<div >
								{" "}
								<div
									style={{
										width: "100%",
										display: "flex",
										alignItems: "center",
										gap: 36,
										justifyContent: "space-between",
									}}
								>
									{brands.slice(1, 5).map((brand) => (
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												gap: 4,
												justifyContent: "center",
												alignContent: "center",
												textAlign: "center",
											}}
										>
											<img
												src={
													require(`../public/imgs/logos/${brand.logo}`).default
														.src
												}
												alt={`${brand.name} 로고`}
												style={{ width: 60, height: 60 }}
											/>
											<span style={{ fontSize: 16 }}>{brand.name}</span>
										</div>
									))}
								</div>
								<div
									style={{
										width: "100%",
										display: "flex",
										alignItems: "center",
										gap: 36,
										justifyContent: "space-between",
									}}
								>
									{brands.slice(4, 9).map((brand) => (
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												gap: 4,
												justifyContent: "center",
												alignContent: "center",
												textAlign: "center",
											}}
										>
											<img
												src={
													require(`../public/imgs/logos/${brand.logo}`).default
														.src
												}
												alt={`${brand.name} 로고`}
												style={{ width: 60, height: 60 }}
											/>
											<span style={{ fontSize: 16 }}>{brand.name}</span>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
					<div style={{ width: "95%" }}>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								width: "100%",
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 12,
									fontSize: 22,
									fontWeight: 500,
								}}
							>
								<span>🔥 요즘 사람들이 주목하는 차량</span>
								<span style={{ color: colors.primary }}>#그랜저</span>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 14,
									paddingLeft: 16,
									paddingRight: 16,
									paddingTop: 10,
									paddingBottom: 10,
									borderRadius: 9999,
									borderColor: "#BDBDBD",
									borderWidth: 1,
									borderStyle: "solid",
								}}
							>
								<img
									src={require("../public/imgs/refresh.svg").default.src}
									alt="새로고침 아이콘"
									style={{ width: 20, height: 20 }}
								/>
								<span style={{ fontSize: 14 }}>주목하는 차량 더보기</span>
							</div>
						</div>
						 <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginTop: 60, flexDirection: isMobile? "column" : "row", }}>
                            {
                                Array(2).fill(0).map((_, i) => (
                                    <div key={i} style={{ flex: 1 }}>
                                        <ArticleSummaryHot key={i} article={randomArticles[i]} />
                                    </div>
                                ))
                            }
                        </div>
					</div>
					<div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
						<div style={{ fontSize: 22, fontWeight: 500 }}>최신 차량 리뷰 보기</div>
						{[1, 4].map((i) => (
							<div
								key={i}
								style={{ display: "flex", alignItems: "center", flexDirection: isMobile? "column":"row", gap: 36 }}
							>
								{randomArticles.slice(i, i + 3).map((article) => (
									<div key={article.id} style={{ flex: 1 }}>
										<ArticleSummaryToday key={article.id} article={article} />
									</div>
								))} 
							</div>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
}
