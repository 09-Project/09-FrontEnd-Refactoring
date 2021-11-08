import React from 'react';
import * as S from './styles';
function Inputs(){
    const InputArr = [
        {
            title : '닉네임',
            eyes : false,
        },
        {
            title : '아이디',
            eyes : false
        },
        {
            title : '바밀번호',
            eyes : true
        },
        {
            title : '비밀번호 확인',
            eyes : true
        }
    ]
    return(
        <S.InputsWrapper>
            {InputArr.map((item,index)=>
                <S.InputDiv>
                    <p>{item.title}</p>
                    <S.InputLabel>
                        <input type={item.eyes ? 'password' : 'text'} />
                    </S.InputLabel>
                </S.InputDiv>
            )}
        </S.InputsWrapper>
    )
}
export default Inputs;