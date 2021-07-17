import { Content, FlexDiv } from '../../../component/CommonStyle/style';
import LineAndTitle from './LindAndTitle';

const PlannerOrganization = () => {
  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <LineAndTitle title="소속 업체 정보" content="소속 웨딩업체를 등록할 수 있어요."></LineAndTitle>
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'20px 0 8px 0'}
      >
        웨딩업체 이름
      </Content>
    </FlexDiv>
  );
};

export default PlannerOrganization;
