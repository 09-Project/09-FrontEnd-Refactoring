import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../modules/redux';
import { setChangePassword,setSignUpPage } from '../../modules/redux/action/signup';
import SignUp from '../../Pages/signup';

const page = useSelector((state:RootState) => state.setPage.page);
const dispatch = useDispatch();

const onSetChangePassword = () => {
    dispatch(setChangePassword());
}
const onSetSignUpPage = () => {
    dispatch(setSignUpPage());
}
function SignUpContainer(){
    return(
        <SignUp
            onSetChangePassword = {onSetChangePassword}
            onSetSignUpPage = {onSetSignUpPage}
        />
    )
}
export default SignUpContainer;