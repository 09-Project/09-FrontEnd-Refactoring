import React, { ChangeEvent } from 'react';
import * as S from '../styles';
interface Props {
    setUploadContent: (e: any) => void;
    uploadContent: any
}
function UploadImg({ setUploadContent, uploadContent }: Props) {
    const onChangeUploadImg = (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (!fileList) return;
        setUploadContent({
            ...uploadContent,
            image: fileList[0]
        })
    }
    return (
        <S.UploadImgWrapper>
            <S.ImgCount>
                <p>상품 이미지</p>
                <p>(0/1)</p>
            </S.ImgCount>
            <S.Imgs>
                <S.InputImg>
                    <input type="file" name="uploadImg" id="" onChange={onChangeUploadImg} multiple={false} />
                </S.InputImg>
                <p>- 이미지는 상품등록 시 정사각형으로 잘려서 등록됩니다.</p>
            </S.Imgs>
        </S.UploadImgWrapper>
    )
}
export default UploadImg;