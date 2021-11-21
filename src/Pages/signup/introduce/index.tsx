import react from 'react';
import * as S from './styles';
interface PropsType {
    pagetype: string | null
}
function Introduce({ pagetype }: PropsType) {
    return (
        <S.IntroduceWrapper>
            {pagetype === 'changepassword' ?
                <S.TitleWrapper>
                    JOIN US
                </S.TitleWrapper>
                :
                <S.PasswordTitle>
                    마이페이지
                </S.PasswordTitle>
            }
            <S.Introduce>
                {pagetype !== 'changepassword' ?
                    '기본 정보 입력'
                    :
                    '비밀번호 입력'
                }
            </S.Introduce>
        </S.IntroduceWrapper>
    )
}
export default Introduce;