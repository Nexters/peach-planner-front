import styled from 'styled-components';
import { Content, FlexDiv } from 'lib/pages/components/style/style';
import LineAndTitle from './LindAndTitle';
import SnsSite from './SnsSite';
interface Props {
  website: string;
  instagram: string;
  facebook: string;
  blog: string;
  handleSns: (e: any) => void;
}

const SnsSetting = ({ website, instagram, facebook, blog, handleSns }: Props) => {
  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <LineAndTitle title="SNS 설정" content="연결된 SNS는 웨딩플래너 페이지에 노출됩니다."></LineAndTitle>
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'0px 0 8px 0'}
      >
        웹 사이트
      </Content>
      <Input name="websiteUrl" defaultValue={website} onChange={handleSns}/>
      <SnsSite
        title="인스타그램"
        url="https://www.instagram.com/"
        margin="16px 0 0 0"
        inputName="instagramUrl"
        handleSns={handleSns}
        defaultValue={instagram}
      />
      <SnsSite
        title="페이스북"
        url="https://facebook.com/"
        margin="24px 0 0 0"
        inputName="facebookUrl"
        handleSns={handleSns}
        defaultValue={facebook}
      />
      <SnsSite
        title="블로그"
        url="https://blog.naver.com/"
        margin="24px 0 0 0"
        inputName="blogUrl"
        handleSns={handleSns}
        defaultValue={blog}
      />
    </FlexDiv>
  );
};

export default SnsSetting;

const Input = styled.input`
  box-sizing: border-box;
  height: 41px;
  width: 421px;
  border: 1px solid #ced4da;
  padding: 13px;
  border-radius: 3px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ADB5BD;
    font-size: 13px;
  }
`;
