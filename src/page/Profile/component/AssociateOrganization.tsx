import { Content, FlexDiv, HorizontalLine, ImageBox } from '../../../component/CommonStyle/style';
import { Input } from '../../../component/Form/InputForm';
import Button from '../../../component/PButton';
import LineAndTitle from './LindAndTitle';

interface Props {
  name: string;
}

const AssociateOrganization = ({ name }: Props) => {
  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <LineAndTitle title={`제휴 ${name} 업체`} content="제휴업체를 등록할 수 있어요."></LineAndTitle>
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'20px 0 8px 0'}
      >
        {`${name} 업체 이름`}
      </Content>
      <Input height="41px" width="421px"></Input>
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'13px 0 12px 0'}
      >
        {`${name} 업체 사진`}
      </Content>
      <ImageBox src="1234" height="93px" width="93px" margin="0px 0px 16px 0"></ImageBox>
      <Content
        height={'36px'}
        width={'auto'}
        color={'#868E96'}
        fontSize={'12px'}
        lineHeight={'18px'}
        margin={'13px 0 12px 0'}
      >
        권장 크기 : 00 x 00 <br></br> jpg,jpeg,gif,png,bmp 형식의 정지 이미지만 등록됩니다.
      </Content>
      <HorizontalLine height="1px" width="632px" backgroundColor="#CED4DA" margin="0"></HorizontalLine>
      {/* <Button width="126px" height="45px" border="1px solid #ADB5BD"></Button> */}
    </FlexDiv>
  );
};

export default AssociateOrganization;
