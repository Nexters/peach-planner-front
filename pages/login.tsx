import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FlexDiv, Title, Content } from 'lib/pages/components/style/style';
import { usePeachTokenState, useUserTypeState } from 'lib/atoms/AuthStatus';
import { KAKAO_AUTH_URL } from 'lib/pages/oauth/OAuth';
import logo from 'public/assets/img/ic_share_kakao.png';
import { getUserMe } from 'lib/api/User';
import { useRouter } from 'next/router';
import { UserLogin } from 'lib/interface/user';
import { publicOnly } from 'lib/routes/withAuth';

const emailRegExp = /^[0-9a-z]([-_\.]?[0-9a-z])*@[0-9a-z]([-_\.]?[0-9a-z])*\.[a-z]/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

export default publicOnly(() => {
    const router = useRouter();
    useEffect(() => {
      // Are you an authorized user or not?
      if (localStorage.getItem('accessToken')) {
        router.replace("/");
      }
    }, []);

    const [, setPeachTokenState] = usePeachTokenState();
    const [, setUserTypeState] = useUserTypeState();
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const { email, password } = inputs;

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email === '' || email.match(emailRegExp) === null) {
            setIsValidEmail(false);
            return;
        } else {
            setIsValidEmail(true);
        }
        if (!password) {
            setIsValidPassword(false);
            return;
        }
        login({
            userName: email,
            password,
            loginType: 'BASIC'
        })
            .then((res) => {
                const accessToken = res.data.accessToken;
                const refreshToken = res.data.refreshToken;
                axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                setPeachTokenState(accessToken);
                getUserAfterLogin();
            })
            .catch((error) => {
                if (error?.response?.data?.message) {
                    const errorMessage = error?.response?.data?.message;
                    alert(errorMessage);
                    return;
                }
                console.error(error);
                alert('???????????? ??????????????? ??????????????????');
                return;
            });
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const login = async (data: UserLogin) => {
        const res = await axios.post('/auth/login', data);
        return res;
    };

    const getUserAfterLogin = () => {
        getUserMe()
            .then((res) => {
                setUserTypeState(res.userType ? res.userType : 'USER');
                router.push('/');
                alert('????????????????????????.');
            })
    }

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        const accessToken = localStorage.getItem('accessToken');
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        const res = await axios.post('/auth/token/refresh', { refreshToken }, config);
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        setPeachTokenState(accessToken);
    };

    return (
        <FlexDiv direction={ 'column' } height={ '700px' } justify={ 'flex-start' }>
            <Title color={ '#212529' } height={ '24px' } fontSize={ '18px' } lineHeight={ '27px' } margin={ '40px 0 24px' }>
                ?????????{ ' ' }
            </Title>

            <form onSubmit={ handleForm }>
                <FlexDiv justify="flex-start" align="flex-start" direction="column" width="undefined">
                    <Label>?????????</Label>
                    <Input
                        name="email"
                        value={ email }
                        placeholder="???????????? ????????? ?????????."
                        type="text"
                        id="inputEmail"
                        onChange={ handleInput }
                    />
                    { !isValidEmail && (
                        <Content color="#E03131" fontSize="12px" height="18px" width="undefined" lineHeight="18px">
                            ????????? ????????? ???????????? ????????????.
                        </Content>
                    ) }

                    <Label>????????????</Label>
                    <Input
                        name="password"
                        value={ password }
                        placeholder="??????????????? ????????? ?????????."
                        type="password"
                        id="inputPassword"
                        onChange={ handleInput }
                    />
                    { !isValidPassword && (
                        <Content color="#E03131" fontSize="12px" height="18px" width="162px" lineHeight="18px">
                            ??????????????? ???????????? ????????????.
                        </Content>
                    ) }

                    <LogInButton radius="3px" width="312px" height="40px" type="submit" margin="16px 0 0 0">
                        ?????????
                    </LogInButton>
                </FlexDiv>
            </form>

            <FlexDiv margin="8px 0 20px 0" justify="flex-end" width={ '313px' }>
                <div
                    style={ { display: 'flex', alignItems: 'center', cursor: 'pointer' } }
                    onClick={ () => router.push('/findEmail') }
                >
                    <Span weight="normal" cursor="pointer">
                        ?????????
                    </Span>
                    <div style={ { width: '4px', height: '4px', margin: '0 5px', backgroundColor: '#ced4da' } }></div>
                    <Span weight="normal" cursor="pointer">
                        ???????????? ??????
                    </Span>
                </div>
            </FlexDiv>

            <FlexDiv margin="0">
                <Span weight="normal">??????</Span>
            </FlexDiv>
            <a href={ KAKAO_AUTH_URL } style={ { textDecoration: 'none' } }>
                <LogInButton radius="3px" background="#FFF000" border="none" width="312px" height="40px" margin="13px 0 10px">
                    <Image src={ logo.src }/>
                    <Span color="#000" cursor="pointer">
                        ???????????? ?????????
                    </Span>
                </LogInButton>
            </a>

            <LogInButton
                radius="3px"
                background="#f1f3f5"
                border="none"
                width="312px"
                height="40px"
                margin="0 0 17.5px"
                onClick={ () => router.push('/signUp') }
            >
                <Span color="#000" weight="normal" cursor="pointer">
                    ????????? ????????????????{ ' ' }
                </Span>
                <Span color="#000" cursor="pointer">
                    ???????????? ??????
                </Span>
            </LogInButton>

            <FlexDiv>
                <Span weight="normal" margin="0 5px 0 0">
                    ??????????????????????
                </Span>
                <Span
                    color="#E64980"
                    cursor="pointer"
                    onClick={ () => {
                        router.push('/plannerSignUp');
                    } }
                >
                    ????????? ??????
                </Span>
            </FlexDiv>
        </FlexDiv>
    );
});

interface Props {
    margin?: string;
    color?: string;
    cursor?: string;
    size?: string;
    weight?: string;
    height?: string;
    width?: string;
    radius?: string;
    background?: string;
    box?: string;
    border?: string;
}

const Span = styled.span<Props>`
  height: 20px;
  width: auto;
  color: ${(props: Props) => props.color || '#495057'};
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
  margin: ${(props: Props) => props.margin || '0'};
  cursor: ${(props: Props) => props.cursor || 'default'};
  font-size: ${(props) => props.size || '14px'};
  font-weight: ${(props) => props.weight || 'bold'};
`;

const Input = styled.input.attrs((props) => ({
    type: props.type || 'text'
}))`
  box-sizing: border-box;
  height: 41px;
  width: 313px;
  border: 1px solid #ced4da;
  border-radius: 3px;
  color: #adb5bd;
  font-size: 13px;
  padding: 10.5px 11.5px;
`;

const LogInButton = styled.button<Props>`
  height: ${(props: Props) => props.height || '48px'};
  width: ${(props: Props) => props.width || '48px'};
  border-radius: ${(props: Props) => props.radius || '100%'};
  background-color: ${(props: Props) => props.background || '#e64980'};
  outline: none;
  border: ${(props: Props) => props.border || 'none'}; // 1px solid #e64980;
  color: ${(props: Props) => props.color || '#ffffff'}; //#e64980
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
  box-sizing: ${(props: Props) => props.box || 'border-box'};
  cursor: pointer;
  margin: ${(props: Props) => props.margin || '0'};
  :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: #f8d756;
    }
  }
  :nth-child(5) {
    :hover {
      background-color: #c2255c;
    }
  }
  :nth-child(6) {
    :hover {
      background-color: #ced4da;
    }
  }
`;

const Label = styled.label`
  flex: 1;
  font-size: 14px;
  color: #495057;
  line-height: 20px;
  margin-bottom: 5.5px;
  &:not(:first-child) {
    margin-top: 4px;
  }
`;

interface ImageProps {
    src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  width: 20px;
  height: 20px;
  margin-right: 6.7px;
`;
