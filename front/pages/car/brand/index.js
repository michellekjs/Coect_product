import { useMediaQuery } from 'react-responsive';
import Link from "next/link";
import Image from "next/image";

import Layout from "../../comps/Layout"
import { brands } from "../../shared";
import styles from "../../comps/hover.module.css"

export default function ArticlePage(props) {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1045px)'
	})
	const isMobile = useMediaQuery({ query: '(max-width: 1045px)' });

  return (
    <Layout title='브랜드 - COECT' description={`브랜드: ${brands.map(_ => _.name).join(', ')}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? 30 : 60,
          marginTop: isMobile ? 30 : 60,
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 500 }}>
          차량 리뷰 찾아보기 🔎
        </div>
        {isDesktop && (
          <div
            style={{
              width: 940,
              display: "flex",
              alignItems: "center",
              gap: 36,
              justifyContent: "space-between",
            }}
          >
            {brands.map((brand,i) => (
              <Link
                key={i}
                href={`/car/brand/${brand.nameEng}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  justifyContent: "center",
                  alignContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  width: isMobile ? "60px" : "100px",
                  height: isMobile ? "60px" : "100px",
                  textDecoration: "none",
                  color: "black",
                }}
                className={styles.logo}
              >
                <Image
                  src={require(`../../public/imgs/logos/${brand.logo}`)}
                  alt={`${brand.name} 로고`}
                  width = { isDesktop ? 60 : 40}
                  height = { isDesktop ? 60 : 40 } 
                  className={isDesktop ? styles.logo : styles.normal}
                />
                <span style={{ fontSize: 16 }}>{brand.name}</span>
              </Link>
            ))}
          </div>
        )}
        {isMobile && (
          <div>
            {[
              { start: 0, end: 4 },
              { start: 4, end: 9 },
            ].map((range,i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  justifyContent: "space-between",
                }}
              >
                {brands.slice(range.start, range.end).map((brand,j) => (
                  <Link
                    key={j}
                    href={`/car/brand/${brand.nameEng}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      justifyContent: "center",
                      alignContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      width: "60px",
                      height: "60px",
                      marginBottom: "40px",
                      textDecoration: "none",
                      color: "black",
                    }}
                    className={isMobile ? styles.normal : styles.logo}
                  >
                    <Image
                      src={
                        require(`../../public/imgs/logos/${brand.logo}`)
                      }
                      alt={`${brand.name} 로고`}
                      width={ 40}
                      height= {40 }
                    />
                    <span style={{ fontSize: 16 }}>{brand.name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
};