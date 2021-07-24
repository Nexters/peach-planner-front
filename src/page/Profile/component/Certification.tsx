import Check from '../../../assets/svg/ic_check.svg';
import { Content, FlexDiv, ImageBox } from '../../../component/CommonStyle/style';

interface Props {
  name: string;
  isCertificated: boolean;
}

const Certification = ({ name, isCertificated }: Props) => {
  return (
    <FlexDiv margin="0 0 8px 21px" justify="flex-start">
      {isCertificated ? (
        <ImageBox src={Check} height="24px" width="24px" margin="0 8px 0 0"></ImageBox>
      ) : (
        <FlexDiv margin="0 8px 0 0" height="24px" width="24px"></FlexDiv>
      )}
      <Content height={'24px'} width={'auto'} color={'#000000'} fontSize={'16px'} lineHeight={'24px'} margin={'0'}>
        {`${name} 인증`}
      </Content>
    </FlexDiv>
  );
};

export default Certification;
