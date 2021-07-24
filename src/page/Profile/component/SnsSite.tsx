import { Content, FlexDiv } from '../../../component/CommonStyle/style';
import { Input } from '../../../component/Form/InputForm';

interface Props {
  title: string;
  url: string;
  margin: string;
}

const SnsSite = ({ title, url, margin }: Props) => {
  return (
    <FlexDiv margin={margin} align="start" direction="column">
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'0 0 8px 0'}
      >
        {title}
      </Content>
      <FlexDiv margin="0" justify="flex-start">
        <Content
          height={'24px'}
          width={'auto'}
          color={'#000000'}
          fontSize={'16px'}
          lineHeight={'24px'}
          margin={'0 8px 0 0'}
        >
          {url}
        </Content>
        <Input height="41px" width="184px"></Input>
      </FlexDiv>
    </FlexDiv>
  );
};

export default SnsSite;
