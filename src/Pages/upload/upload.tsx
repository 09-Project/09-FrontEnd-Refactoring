import React from 'react';
import * as S from './styles';
import Radio from './UploadTypeRadio';
import UploadImg from './UploadImg';
import UploadInput from './UploadInputs';
const Upload = () => {
    return(
        <S.UploadPageWrapper>
            <S.TitleWrapper>
                <S.Title>게시물 올리기</S.Title>
                <S.summary>*은 필수항목입니다</S.summary>
            </S.TitleWrapper>
            <Radio/>
            <UploadImg/>
            <UploadInput/>
        </S.UploadPageWrapper>
    )
}
export default Upload;