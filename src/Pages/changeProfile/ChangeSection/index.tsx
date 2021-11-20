import React, { useState, ChangeEvent } from 'react';
import * as S from '../styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules/redux';
function ChangeSection() {
    const name = useSelector((state: RootState) => state.setMember.info.name);
    const introduction = useSelector((state: RootState) => state.setMember.info.introduction);
    const profile = useSelector((state: RootState) => state.setMember.info.profile_url);
    const [inputs, setInputs] = useState({
        nickName: '',
        selfIntroduction: ''
    })
    const { nickName, selfIntroduction } = inputs
    const limit = {
        nickNameLimit: 10,
        selfIntroductionLimit: 200
    }
    console.log(inputs)
    const onChangeProfile = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(name)
        if (name === 'nickName' && value.length <= limit.nickNameLimit || name === 'selfIntroduction' && value.length <= limit.selfIntroductionLimit) {
            setInputs({
                ...inputs,
                [name]: value
            })
        }
    }
    return (
        <S.ChangeSection>
            <S.ChangeImg>
                <S.Profile img={profile} />
                <button>이미지 변경</button>
            </S.ChangeImg>
            <S.Inputs>
                <S.EachInput marginBottom={50} heigth={44}>
                    <p>닉네임</p>
                    <input type="text" placeholder={name} name="nickName" value={nickName} onChange={onChangeProfile} />
                    <div>({nickName.length}/{10})</div>
                </S.EachInput>
                <S.EachInput heigth={146}>
                    <p>자기소개</p>
                    <textarea placeholder={introduction} name="selfIntroduction" value={selfIntroduction} onChange={onChangeProfile} />
                    <div>({selfIntroduction.length}/{200})</div>
                </S.EachInput>
            </S.Inputs>
        </S.ChangeSection>
    )
}
export default ChangeSection