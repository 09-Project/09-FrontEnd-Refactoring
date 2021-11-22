import * as S from './styles'
import InfoIcon from '../../../assets/images/infoIcon.svg'
function Empty() {
    return (
        <S.EmptyWrapper>
            <S.NotFount>
                <i><img src={InfoIcon} alt="" /></i>
                <p>검색 결과가 없습니다</p>
            </S.NotFount>
            <S.Line />
            <S.Introduce>
                <p>다른 검색어(유사어)로 검색해 보시기 바랍니다.</p>
                <p>단어의 철자가 정확한지 확인해 주시기 바랍니다.</p>
                <p>일반적으로 많이 사용하는 검색어로 다시 검색해 주시기 바랍니다.</p>
            </S.Introduce>
        </S.EmptyWrapper>
    )
}
export default Empty