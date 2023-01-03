import React, { useState } from 'react';

import Author from './Author';

const Article = props => {
    const styles  ={
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
        }
    }
    return (
        <div>
            <div style={styles.goBack}>
                <img style={styles.goBackIcon} src={require('../assets/images/back.svg').default}/>
                <div style={styles.goBackText}>목록으로 돌아가기</div>
            </div>
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

                <p>
                    #1. TSMC와 삼성전자는 업이 다릅니다. 삼성전자는 메모리를 주로 생산하고 TSMC는 시스템반도체 제조를 주로 하는 기업입니다. 메모리는 가격의 등락이 크지만 시스템반도체는 그렇지 않습니다. 작년 자동차 반도체가 부족할 당시부터 시스템 반도체의 가격이 높아졌는데 지금도 떨어지지 않았습니다. 메모리는 코로나 이후 통화정책으로 긴축되며 수요가 위축되며 가격이 하락했기에 삼성전자는 TSMC에게 추월당했다는 얘기가 나오고 있는 겁니다. (00:00~2:32)
                </p>
                <p>
                    #1. TSMC와 삼성전자는 업이 다릅니다. 삼성전자는 메모리를 주로 생산하고 TSMC는 시스템반도체 제조를 주로 하는 기업입니다. 메모리는 가격의 등락이 크지만 시스템반도체는 그렇지 않습니다. 작년 자동차 반도체가 부족할 당시부터 시스템 반도체의 가격이 높아졌는데 지금도 떨어지지 않았습니다. 메모리는 코로나 이후 통화정책으로 긴축되며 수요가 위축되며 가격이 하락했기에 삼성전자는 TSMC에게 추월당했다는 얘기가 나오고 있는 겁니다. (00:00~2:32)
                </p>
                <p>
                    #1. TSMC와 삼성전자는 업이 다릅니다. 삼성전자는 메모리를 주로 생산하고 TSMC는 시스템반도체 제조를 주로 하는 기업입니다. 메모리는 가격의 등락이 크지만 시스템반도체는 그렇지 않습니다. 작년 자동차 반도체가 부족할 당시부터 시스템 반도체의 가격이 높아졌는데 지금도 떨어지지 않았습니다. 메모리는 코로나 이후 통화정책으로 긴축되며 수요가 위축되며 가격이 하락했기에 삼성전자는 TSMC에게 추월당했다는 얘기가 나오고 있는 겁니다. (00:00~2:32)
                </p>
                <p>
                    #1. TSMC와 삼성전자는 업이 다릅니다. 삼성전자는 메모리를 주로 생산하고 TSMC는 시스템반도체 제조를 주로 하는 기업입니다. 메모리는 가격의 등락이 크지만 시스템반도체는 그렇지 않습니다. 작년 자동차 반도체가 부족할 당시부터 시스템 반도체의 가격이 높아졌는데 지금도 떨어지지 않았습니다. 메모리는 코로나 이후 통화정책으로 긴축되며 수요가 위축되며 가격이 하락했기에 삼성전자는 TSMC에게 추월당했다는 얘기가 나오고 있는 겁니다. (00:00~2:32)
                </p>
                <p>
                    #1. TSMC와 삼성전자는 업이 다릅니다. 삼성전자는 메모리를 주로 생산하고 TSMC는 시스템반도체 제조를 주로 하는 기업입니다. 메모리는 가격의 등락이 크지만 시스템반도체는 그렇지 않습니다. 작년 자동차 반도체가 부족할 당시부터 시스템 반도체의 가격이 높아졌는데 지금도 떨어지지 않았습니다. 메모리는 코로나 이후 통화정책으로 긴축되며 수요가 위축되며 가격이 하락했기에 삼성전자는 TSMC에게 추월당했다는 얘기가 나오고 있는 겁니다. (00:00~2:32)
                </p>
            </div>
            
        </div>
    )
};

export default Article;