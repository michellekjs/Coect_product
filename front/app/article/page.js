import Author from '../../comps/Author';
import ArticleRecommended from '../../comps/ArticleRecommended';
import TextUnit from '../../comps/TextUnit';

export default function Article(props) {
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
        subtitle: {
            display: 'flex', alignItems: 'center', gap: 20,
            marginTop: 10
        },
        date: {
            color: '#a0a0a0'
        },
        yt: {
            marginTop: 40, marginBottom: 40,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
        },
        h3: {
            marginBottom: 0,
        },
        h4: {
            marginTop: 10, marginBottom: 0,
        },
        relateds: {
            display: 'flex', alignItems: 'center', gap: 10,
        },
        related: {
            flex: 1
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.article}>
                <div>
                    {/* <div style={styles.goBack}>
                        <img style={styles.goBackIcon} src='/back.svg'/>
                        <div style={styles.goBackText}>목록으로 돌아가기</div>
                    </div> */}
                    <div style={styles.title}>
                        워렌 버핏 TSMC 주식 매수, 삼성전자에 부담이 될까?
                    </div>
                    < div style={styles.subtitle}>
                        <Author />
                        <div style={styles.date}>2022.12.12</div>
                    </div>

                    <div>
                        <div style={styles.yt}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/x6Be3P2jsgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        
                        <TextUnit start={0} end={152}>
                            #1. TSMC와 삼성전자는 업이 다릅니다. 삼성전자는 메모리를 주로 생산하고 TSMC는 시스템반도체 제조를 주로 하는 기업입니다. 메모리는 가격의 등락이 크지만 시스템반도체는 그렇지 않습니다. 작년 자동차 반도체가 부족할 당시부터 시스템 반도체의 가격이 높아졌는데 지금도 떨어지지 않았습니다. 메모리는 코로나 이후 통화정책으로 긴축되며 수요가 위축되며 가격이 하락했기에 삼성전자는 TSMC에게 추월당했다는 얘기가 나오고 있는 겁니다. 
                        </TextUnit>
                        <TextUnit start={153} end={255}>
                            #2. 국내 반도체 기업들은 과거가 너무 좋았습니다. 2016년 이후 빅데이터 시대가 열리며 세계의 데이터 센터들이 서버 투자를 많이 했습니다. 2022년이 너무 안좋긴 하지만 과거 5년 전부터 너무 좋았기 때문에 상대적으로 더 안 좋게 보이는 겁니다.
                        </TextUnit>
                        <TextUnit start={0} end={152}>
                            #1. TSMC와 삼성전자는 업이 다릅니다. 삼성전자는 메모리를 주로 생산하고 TSMC는 시스템반도체 제조를 주로 하는 기업입니다. 메모리는 가격의 등락이 크지만 시스템반도체는 그렇지 않습니다. 작년 자동차 반도체가 부족할 당시부터 시스템 반도체의 가격이 높아졌는데 지금도 떨어지지 않았습니다. 메모리는 코로나 이후 통화정책으로 긴축되며 수요가 위축되며 가격이 하락했기에 삼성전자는 TSMC에게 추월당했다는 얘기가 나오고 있는 겁니다. 
                        </TextUnit>
                        <TextUnit start={153} end={255}>
                            #2. 국내 반도체 기업들은 과거가 너무 좋았습니다. 2016년 이후 빅데이터 시대가 열리며 세계의 데이터 센터들이 서버 투자를 많이 했습니다. 2022년이 너무 안좋긴 하지만 과거 5년 전부터 너무 좋았기 때문에 상대적으로 더 안 좋게 보이는 겁니다.
                        </TextUnit>
                        
                    </div>
                </div>
                
                <br/>
                <div>
                    <h3 style={styles.h3}>관련된 게시물</h3>
                    <div style={styles.relateds}>
                        <div style={styles.related}>
                            <ArticleRecommended/>
                        </div>
                        <div style={styles.related}>
                            <ArticleRecommended/>
                        </div>
                        <div style={styles.related}>
                            <ArticleRecommended/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style={styles.recommended}>
                <h3 style={styles.h3}>삼성전자 주가 추천 영상</h3>

                <h4 style={styles.h4}>금리 상승: 삼성전자 주가</h4>
                <ArticleRecommended/>
                <h4 style={styles.h4}>하락장: 삼성전자 주가</h4>
                <ArticleRecommended/>
                <ArticleRecommended/>
            </div>

        
            
        </div>
    )
};