import React from 'react';
import * as S from './styles';

const Upload = () => {
    return(
        <S.UploadPageWrapper>
            <S.TitleWrapper>
                <S.Title>게시물 올리기</S.Title>
                <S.summary>*은 필수항목입니다</S.summary>
            </S.TitleWrapper>
        </S.UploadPageWrapper>
    )
}
export default Upload;