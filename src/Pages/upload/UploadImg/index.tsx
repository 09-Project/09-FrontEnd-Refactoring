import React, { ChangeEvent, useState } from 'react';
import * as S from '../styles';
import removeIcon from '../../../assets/images/removeImg.svg'
import XIcon from '../../../assets/images/Xicon.svg';
interface Props {
    setUploadContent: (e: any) => void;
    uploadContent: any
}
function UploadImg({ setUploadContent, uploadContent }: Props) {
    const [fileUrl, setFileUrl] = useState<any>(null)
    const onChangeUploadImg = (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (!fileList) return;
        setFileUrl(URL.createObjectURL(fileList[0]));
        setUploadContent({
            ...uploadContent,
            image: fileList[0]
        })
    }
    const onClickRemoveImg = () => {
        setFileUrl(null)
        setUploadContent({
            ...uploadContent,
            image: null
        })
    }
    return (
        <S.UploadImgWrapper>
            <S.ImgCount>
                <p>상품 이미지</p>
                <p>({fileUrl !== null ? 1 : 0}/1)</p>
            </S.ImgCount>
            <S.Imgs>
                <S.ImgBox>
                    {fileUrl !== null ? <S.RemoveImgButton onClick={onClickRemoveImg} img={removeIcon}><img src={XIcon} /></S.RemoveImgButton> : ''}
                    <S.InputImg img={fileUrl}>
                        <input type="file" name="uploadImg" id="" onChange={onChangeUploadImg} multiple={false} />
                    </S.InputImg>
                </S.ImgBox>
                <p>- 이미지는 상품등록 시 정사각형으로 잘려서 등록됩니다.</p>
            </S.Imgs>
        </S.UploadImgWrapper>
    )
}
export default UploadImg;