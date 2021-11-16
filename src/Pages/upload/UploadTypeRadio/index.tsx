import React, { useState } from 'react';
import * as S from '../styles';

interface Props {
    setUploadContent: (e: any) => void;
    uploadContent: any;
}
function Radio({ setUploadContent, uploadContent }: Props) {
    const CO_BUYING_RADIO_ID = 'co-buying';
    const DONATION_RADIO_ID = 'donation';
    // const [selectRadio, setSelectRadio] = useState('co-buying');
    const selectRadio = uploadContent.type;
    const onChangeRadio = (e: any) => {
        const { id } = e.target;

        setUploadContent({
            ...uploadContent,
            type: id
        })
    }
    return (
        <S.SelectTypeWrapper>
            <S.SelectType>
                <S.CheckboxWrapper>
                    <S.Checkbox type="radio" id={CO_BUYING_RADIO_ID} name="typeCheckbox" onChange={onChangeRadio} checked={selectRadio === CO_BUYING_RADIO_ID} />
                </S.CheckboxWrapper>
                공동구매
            </S.SelectType>
            <S.SelectType>
                <S.CheckboxWrapper>
                    <S.Checkbox type="radio" id={DONATION_RADIO_ID} name="typeCheckbox" onChange={onChangeRadio} checked={selectRadio === DONATION_RADIO_ID} />
                </S.CheckboxWrapper>
                기부
            </S.SelectType>
        </S.SelectTypeWrapper>
    )
}
export default Radio;