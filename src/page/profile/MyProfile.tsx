import { FlexDiv, Content } from '../../component/style/style';
import LineAndTitle from './LindAndTitle';
import styled from 'styled-components';

const MyProfile = () => {
  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <LineAndTitle title="내 프로필"></LineAndTitle>
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'20px 0 8px 0'}
      >
        플래너 한줄소개
      </Content>
      <Input></Input>
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'24px 0 8px 0'}
      >
        플래너 소개
      </Content>
      <TextArea></TextArea>
    </FlexDiv>
  );
};

export default MyProfile;

const Input = styled.input`
  box-sizing: border-box;
  height: 41px;
  width: 633px;
  border: 1px solid #ced4da;
  padding: 13px;
  border-radius: 3px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ADB5BD;
    font-size: 13px;
  }
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  height: 266px;
  width: 633px;
  padding: 13px;
  border: 1px solid #ced4da;
  border-radius: 3px;
`;
