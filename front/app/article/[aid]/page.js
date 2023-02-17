import React from 'react';
import YouTube from 'react-youtube';

import Subtitle from '../../../comps/Subtitle';
import ArticleRecommended from '../../../comps/ArticleRecommended';
import TextUnit from '../../../comps/TextUnit';

import { articles } from '../../shared';

export function generateStaticParams() {
    return articles.map(_ => ({ aid: String(_.id) }));
  }

// export async function getStaticPaths() {
//     return {
//         paths: articles.map(a => ({ params: { aid: a.id } })),
//         fallback: false
//     }
//   }

export default function ArticleIdPage({ params }) {
    const styles  ={
        container: {
            display: 'flex', gap: 20
        },
        article: {
            flex: 1,
            // marginLeft: 10, marginRight: 10,
        },
        recommended: {
            width: 250,
            marginLeft: 10
        },
        goBack: {
            display: 'flex', alignItems: 'center', gap: 5
        },
        goBackIcon: {
            width: 8, height: 16,
        },
        title: {
            fontSize: 36, fontWeight: 'bold',
            marginTop: 10
        },
        yt: {
            marginTop: 40, marginBottom: 40,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
        },
        h3: {
            marginBottom: 0,
        },
        h4: {
            marginTop: 18, marginBottom: 8,
        },
        relateds: {
            marginTop: 10,
            display: 'flex', alignItems: 'center', gap: 10,
        },
        related: {
            flex: 1
        }
    }

    const article = articles.find(a => a.id == params.aid);

    const recommendedArticleIdStart = Math.ceil(article.id/4)*4 - 3;
    const recommendedArticles = articles.filter(a => a.id >= recommendedArticleIdStart && a.id < recommendedArticleIdStart+4 && a.id != article.id);

    const relatedArticlesByKeywords = article.keywords.map(k => ({
        keyword: k,
        articles: articles.filter(a => a.keywords.includes(k) && a.id != article.id)
    }));

    return (
        <div style={styles.container}>
            <div style={styles.article}>
                <div>
                    {/* <div style={styles.goBack}>
                        <img style={styles.goBackIcon} src='/back.svg'/>
                        <div style={styles.goBackText}>목록으로 돌아가기</div>
                    </div> */}
                    <div style={styles.title}>
                        {article.title}
                    </div>
                    <Subtitle article={article}/>
                    
                    <p>
                        키워드: {article.keywords.join(', ')}
                    </p>
                    <div>
                        <div style={styles.yt}>
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${article.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        {/* <YouTube
                            videoId={article.videoId}
                            opts={{
                                width: "560",
                                height: "315",
                                playerVars: {
                                autoplay: 1,
                                rel: 0,
                                modestbranding: 1,
                                },
                            }}
                            onEnd={(e)=>{e.target.stopVideo(0);}}      
                        /> */}
                        
                        {
                            article.summaries.map(summary => (
                                summary.text ? 
                                <TextUnit subject={summary.subject} start={summary.start} end={summary.end}>{summary.text}</TextUnit> : 
                                <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
                                    <img src={`/imgs/figures/${summary.image}`} style={{ width: 600 }}></img>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                <br/>
                <div>
                    <h3 style={styles.h3}>추천 콘텐츠</h3>
                    <div style={styles.relateds}>
                        {
                            recommendedArticles.map(article => (
                                <div style={styles.related}>
                                    <ArticleRecommended article={article}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
            <div style={styles.recommended}>

                <h3 style={styles.h3}>관련 콘텐츠</h3>
                
                {
                    relatedArticlesByKeywords.map(({keyword, articles}) => 
                        articles.length ? [
                            <h4 style={styles.h4}>{keyword}</h4>,
                            articles.map(article => (
                                <ArticleRecommended article={article}/>
                            ))
                        ] : null
                    )
                }
            </div>
        </div>
    )
};