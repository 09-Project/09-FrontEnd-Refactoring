import React, { useState, ChangeEvent } from 'react';
import * as S from '../styles';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules/redux';
interface PropsType {
    inputs: {
        nickName: string,
        selfIntroduction: string,
        profileUrl: string
    }
    setInputs: (e: any) => void
    limit: {
        nickNameLimit: number,
        selfIntroductionLimit: number
    }
}
function ChangeSection({ inputs, setInputs, limit }: PropsType) {
    const name = useSelector((state: RootState) => state.setMember.info.name);
    const introduction = useSelector((state: RootState) => state.setMember.info.introduction);
    const profile = useSelector((state: RootState) => state.setMember.info.profile_url);
    const { nickName, selfIntroduction, profileUrl } = inputs
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
    const onChangeProfileImg = (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (!fileList) return;
        setInputs({
            ...inputs,
            profileUrl: fileList[0]
        })
    }
    return (
        <S.ChangeSection>
            <S.ChangeImg>
                <S.Profile img={profile} />
                <label><input type="file" onChange={onChangeProfileImg} />이미지 변경</label>
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
                <Link to="/">
                    <S.ChangePassword>
                        비밀번호 변경
                    </S.ChangePassword>
                </Link>
            </S.Inputs>
        </S.ChangeSection>
    )
}
export default ChangeSection