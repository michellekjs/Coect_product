import Layout from '../comps/Layout';
import ArticleSummaryTop from '../comps/ArticleSummaryTop';
import ArticleSummaryToday from '../comps/ArticleSummaryToday';

import { articles, categories } from '../shared';

export default function MainPage() {

    const channelPicks = [
        {
            category: 1,
            channelImageUrl: 'https://yt3.googleusercontent.com/ytc/AL5GRJWqd-QcTkiv4GAJ9eEQgNuF7eWRpHSCdUGL1EsqHQ=s176-c-k-c0x00ffffff-no-rj',
            channelName: '삼프로TV_경제의신과함께',
            channelId: '@3protv',
            channelDescription: '\'경제의 신과함께\' 3PROTV입니다.'
        },
        {
            category: 2,
            channelImageUrl: 'https://yt3.googleusercontent.com/ytc/AL5GRJVx1xu-0KtWJ2wAfWh2KnKt5Sa85gK78tlj-KVD=s176-c-k-c0x00ffffff-no-rj',
            channelName: '트립콤파니',
            channelId: '@tripcompany93',
            channelDescription: '지구라는 행성 여행의 백과사전이 되고자 합니다.'
        },
        {
            category: 3,
            channelImageUrl: 'https://yt3.googleusercontent.com/ytc/AL5GRJVN-ClLa8cOLnYO9QYbqJnzl-pOOa2qQSmhKA-XIQ=s176-c-k-c0x00ffffff-no-rj',
            channelName: '주연 ZUYONI',
            channelId: '@zuyoni1',
            channelDescription: '기술은 우리의 경험을 어떻게 바꿀까요?'
        },
        {
            category: 4,
            channelImageUrl: 'https://yt3.googleusercontent.com/PLcb4E4kmku90sZvPUgfYlZC2N_b6O5C5NeMeecC7cY_ZnOi_38tHpuNdEa2MkP8cr9BnuRg2A=s176-c-k-c0x00ffffff-no-rj',
            channelName: '레어리RareLee',
            channelId: '@RareLee',
            channelDescription: '스타일 컨설턴트  RareLee 입니다 :)'
        },
        {
            category: 5,
            channelImageUrl: 'https://yt3.googleusercontent.com/ytc/AL5GRJXaE02Phk_SsOB8I8fwk5IAu-2NENkG3plXdW042A=s176-c-k-c0x00ffffff-no-rj',
            channelName: '김한용의 MOCAR',
            channelId: '@mocar_official',
            channelDescription: '유튜브, 컨텐트, 그리고 세상을 흥미롭게 바라보는 김한용의 채널입니다.'
        },
    ]

    const randomArticles = articles.sort(() => Math.random() - 0.5);

    return (
        <Layout>
            <div style={{ maxWidth: 1000 }}>

            </div>
            <ArticleSummaryTop article={randomArticles[0]} top/>

            <br/>
            <div style={{marginTop:"40px", marginBottom:"20px",fontWeight:"600", fontSize:"20pt"}}>채널 pick</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {
                channelPicks.map((article,i) => (
                    <a key={i} href={`https://www.youtube.com/${article.channelId}`} target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'black', paddingLeft: 10, paddingRight: 10, width: '20%' }}>
                        <div>{categories[article.category-1]}</div>
                        <img src={article.channelImageUrl} alt={`${article.channelName} 채널 프로필 이미지`} style={{ width: 110, height: 110, borderRadius: '50%', marginTop: 10 }}/>
                        <div style={{ marginTop: 10 }}><b>{article.channelName}</b></div>
                        <div style={{ marginTop: 5, wordBreak: 'keep-all', fontSize:"12pt", marginTop:'20px', textAlign:'center' }}>{article.channelDescription}</div>
                    </a>
                ))
            }
            </div>

            <br/>
            <div style={{marginTop:"40px",marginBottom:"20px", fontWeight:"600", fontSize:"20pt"}}>오늘의 콘텐츠</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            {
                [1,4].map(i => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 45 }}>
                        {
                            randomArticles.slice(i,i+3).map(article => 
                                <div key={article.id} style={{ flex: 1 }}>
                                    <ArticleSummaryToday key={article.id} article={article} />
                                </div>    
                            )
                        }
                    </div>
                ))
            }
            </div>
        </Layout>
    )
};