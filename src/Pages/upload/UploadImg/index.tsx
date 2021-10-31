import React from 'react';
import * as S from '../styles';

function UploadImg(){
    return(
        <S.UploadImgWrapper>
            <S.ImgCount>
                <p>상품 이미지</p>
                <p>(0/1)</p>
            </S.ImgCount>
            <S.Imgs>
                <S.InputImg>
                    <input type="file" name="" id="" />
                </S.InputImg>
                <p>- 이미지는 상품등록 시 정사각형으로 잘려서 등록됩니다.</p>
            </S.Imgs>
        </S.UploadImgWrapper>
    )
}
export default UploadImg;