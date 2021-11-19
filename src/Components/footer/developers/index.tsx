import React from 'react';
import * as S from '../styles'

function Developers() {
    const developers = [
        {
            name: '강석현',
            developType: 'Front-end',
        },
        {
            name: '김범진',
            developType: 'Back-end',
        },
        {
            name: '임세현',
            developType: 'Android',
        },
        {
            name: '김기영',
            developType: 'iOS',
        },
        {
            name: '추혜연',
            developType: 'Design',
        }
    ]
    return (
        <S.Developers>
            <div>
                {
                    developers.map((item, index) =>
                        <S.EachDeveloper>
                            <S.DevelopType>{item.developType}</S.DevelopType>
                            <S.DeveloperName>{item.name}</S.DeveloperName>
                        </S.EachDeveloper>
                    )
                }
            </div>
        </S.Developers>
    )
}
export default Developers