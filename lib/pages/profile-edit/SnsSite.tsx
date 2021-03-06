import styled from 'styled-components';
import { Content, FlexDiv } from 'lib/pages/components/style/style';

interface Props {
  title: string;
  url: string;
  margin: string;
  inputName: string;
  defaultValue?: string;
  handleSns: (e: any) => void;
}

const SnsSite = ({ title, url, margin, inputName, defaultValue, handleSns }: Props) => {
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
        <Input name={inputName} defaultValue={defaultValue} onChange={handleSns}></Input>
      </FlexDiv>
    </FlexDiv>
  );
};

export default SnsSite;

const Input = styled.input`
  box-sizing: border-box;
  height: 41px;
  width: 184px;
  border: 1px solid #ced4da;
  padding: 13px;
  border-radius: 3px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ADB5BD;
    font-size: 13px;
  }
`;
