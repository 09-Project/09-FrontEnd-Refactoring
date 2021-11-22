import React, { useState } from 'react';
import ChangeSection from './ChangeSection';
import * as S from './styles';
import axios from 'axios';
import { API_HOST } from '../../constant/api';
import { useHistory } from 'react-router-dom'
function ChangeProfile() {
    const [inputs, setInputs] = useState({
        nickName: '',
        selfIntroduction: '',
        profileUrl: ''
    })
    const limit = {
        nickNameLimit: 10,
        selfIntroductionLimit: 200
    }
    const history = useHistory()
    const onClickSubmitChange = () => {
        const form = new FormData();
        form.append('name', inputs.nickName);
        form.append('introduction', inputs.selfIntroduction)
        form.append('profileUrl', inputs.profileUrl);
        axios.patch(API_HOST + '/member/information', form).then(() => {
            alert("프로필 변경에 성공했습니다!")
            history.push('/')
        })
    }
    return (
        <S.ChangeProfileWrapper>
            <S.Title>마이페이지</S.Title>
            <ChangeSection inputs={inputs} setInputs={setInputs} limit={limit} />
            <S.SubmitButton onClick={onClickSubmitChange}>완료</S.SubmitButton>
        </S.ChangeProfileWrapper>
    )
}
export default ChangeProfile