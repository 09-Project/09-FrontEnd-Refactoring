import axios from 'axios';
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API_HOST } from '../../../constant/api';
import * as S from './styles';

interface ArrayType {
    title: string;
    width?: number;
    won?: string;
    placeholder: string;
    value: string;
    name: string
}
interface Props {
    setUploadContent: (e: any) => void;
    uploadContent: any;
}
function UploadInput({ setUploadContent, uploadContent }: Props) {
    const history = useHistory();
    const inputArr: Array<ArrayType> = [
        {
            title: '가격',
            width: 375,
            won: '원',
            placeholder: '숫자만 입력해주세요',
            value: uploadContent.price,
            name: 'price'
        },
        {
            title: '거래지역*',
            placeholder: '거래지역을 입력해주세요(ex.대덕소프트웨어마이스터고)',
            value: uploadContent.transactionRegion,
            name: 'transactionRegion'
        },
        {
            title: '오픈채팅*',
            placeholder: '오픈채팅방 링크를 입력해주세요',
            value: uploadContent.openChatLink,
            name: 'openChatLink'
        }
    ]
    const limitLength = {
        titleLimit: 40,
        contentLimit: 500
    }
    const onChangeLimitInputs = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.name === 'title' && e.target.value.length <= limitLength.titleLimit || e.target.name === 'content' && e.target.value.length <= limitLength.contentLimit) {
            setUploadContent({
                ...uploadContent,
                [e.target.name]: e.target.value
            })
        }
    }
    const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
        setUploadContent({
            ...uploadContent,
            [e.target.name]: e.target.value
        })
    }
    const onClickSubmit = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const form = new FormData();
        form.append('title', uploadContent.title)
        form.append('content', uploadContent.content)
        form.append('price', uploadContent.price)
        form.append('transactionRegion', uploadContent.transactionRegion)
        form.append('openChatLink', uploadContent.openChatLink)
        if (uploadContent.image) {
            form.append('image', uploadContent.image, uploadContent.image.name)
        }
        axios.post(API_HOST + '/post', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(() => {
            alert('게시글 작성을 성공하였습니다!');
            history.push('/')
        })
    }
    return (
        <div>
            <S.UploadInputWrapper>
                <S.InputWrapper>
                    <S.Title>글 제목*</S.Title>
                    <S.Input placeholder="글 제목을 입력해주세요" value={uploadContent.title} onChange={onChangeLimitInputs} name="title" />
                    <S.Detail>({uploadContent.title.length}/{limitLength.titleLimit})</S.Detail>
                </S.InputWrapper>
                <S.TextareaWrapper>
                    <S.Title>글 설명</S.Title>
                    <S.Textarea placeholder="글 설명을 입력해주세요" value={uploadContent.content} onChange={onChangeLimitInputs} name="content" />
                    <S.Detail>({uploadContent.content.length}/{limitLength.contentLimit})</S.Detail>
                </S.TextareaWrapper>
            </S.UploadInputWrapper>
            {inputArr.map((li, index) => (
                uploadContent.type === 'donation' && li.title === '가격' ?
                    '' :
                    < S.UploadInputWrapper >
                        <S.InputWrapper>
                            <S.Title>{li.title}</S.Title>
                            <S.Input width={li.width} placeholder={li.placeholder} value={li.value} onChange={onChangeInputs} name={li.name} />
                            {li.won ? <S.Detail>원</S.Detail> : ''}
                        </S.InputWrapper>
                    </S.UploadInputWrapper>
            ))
            }
            <S.ButtonWrapper>
                <S.SubmitButton onClick={onClickSubmit}>완료</S.SubmitButton>
            </S.ButtonWrapper>
        </div >
    )
}
export default UploadInput;