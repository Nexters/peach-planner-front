import { Content, FlexDiv } from '../../../component/CommonStyle/style';
import { Input } from '../../../component/Form/InputForm';
import LineAndTitle from './LindAndTitle';
import SnsSite from './SnsSite';

const SnsSetting = () => {
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
      <Input height="41px" width="421px"></Input>
      <SnsSite title="인스타그램" url="https://www.instagram.com/" margin="16px 0 0 0"></SnsSite>
      <SnsSite title="페이스북" url="http://facebook.com/" margin="24px 0 0 0"></SnsSite>
      <SnsSite title="블로그" url="https://blog.naver.com/" margin="24px 0 0 0"></SnsSite>
    </FlexDiv>
  );
};

export default SnsSetting;
