import React from 'react';
import * as S from './styles';

interface ArrayType {
    title : string;
    width? : number;
    won? : string;
    placeholder : string;
}

function UploadInput(){
    const inputArr:Array<ArrayType> = [
        {
            title : '가격',
            width : 375,
            won : '원',
            placeholder : '숫자만 입력해주세요'
        },
        {
            title : '거래지역*',
            placeholder : '거래지역을 입력해주세요(ex.대덕소프트웨어마이스터고)'
        },
        {
            title : '오픈채팅*',
            placeholder : '오픈채팅방 링크를 입력해주세요'
        }
    ]
    return(
        <form>
            <S.UploadInputWrapper>
                <S.InputWrapper>
                    <S.Title>글 제목*</S.Title>
                    <S.Input placeholder="글 제목을 입력해주세요"/>
                    <S.Detail>(0/40)</S.Detail>
                </S.InputWrapper>
                <S.TextareaWrapper>
                    <S.Title>글 설명</S.Title>
                    <S.Textarea placeholder="글 설명을 입력해주세요"/>
                    <S.Detail>(0/500)</S.Detail>
                </S.TextareaWrapper>
            </S.UploadInputWrapper>
            {inputArr.map((li,index)=>(
                <S.UploadInputWrapper>
                    <S.InputWrapper>
                        <S.Title>{li.title}</S.Title>
                        <S.Input width={li.width} placeholder={li.placeholder} />
                        {li.won ? <S.Detail>원</S.Detail> : ''}
                    </S.InputWrapper>
                </S.UploadInputWrapper>
            ))}
            <S.ButtonWrapper>
                <S.SubmitButton>완료</S.SubmitButton>
            </S.ButtonWrapper>
        </form>
    )
}
export default UploadInput;