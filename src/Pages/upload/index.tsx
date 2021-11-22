import React, { useState } from 'react';
import * as S from './styles';
import Radio from './UploadTypeRadio';
import UploadImg from './UploadImg';
import UploadInput from './UploadInputs';
import DefaultGoodsImg from '../../assets/images/defaultGoods.png'
interface UploadType {
    title: string
    content: string
    price: string
    transactionRegion: string
    openChatLink: string
    image?: File
    type: string
}
const Upload = () => {
    const [uploadContent, setUploadContent] = useState<UploadType>({
        title: '',
        content: '',
        price: '',
        transactionRegion: '',
        openChatLink: '',
        image: undefined,
        type: 'co-buying'
    })
    return (
        <S.UploadPageWrapper>
            <S.TitleWrapper>
                <S.Title>게시물 올리기</S.Title>
                <S.summary>*은 필수항목입니다</S.summary>
            </S.TitleWrapper>
            <Radio setUploadContent={setUploadContent} uploadContent={uploadContent} />
            <UploadImg setUploadContent={setUploadContent} uploadContent={uploadContent} />
            <UploadInput setUploadContent={setUploadContent} uploadContent={uploadContent} />
        </S.UploadPageWrapper>
    )
}
export default Upload;