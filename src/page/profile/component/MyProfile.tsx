import { FlexDiv, Content } from '../../../component/style/style';
import { Input, TextArea } from '../../../component/Form/InputForm';
import LineAndTitle from './LindAndTitle';

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
      <Input height="41px" width="633px"></Input>
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
      <TextArea height="266px" width="633px"></TextArea>
    </FlexDiv>
  );
};

export default MyProfile;
