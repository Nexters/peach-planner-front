import styled from 'styled-components';
import { Content } from './style/style';

interface Props {
  type: string | undefined;
  textHeight: string;
  typeHeight: string;
  fontSize: string;
  lineHeight: string;
}

const UserType = ({ type, textHeight, typeHeight, fontSize, lineHeight }: Props) => {
  return (
    <TypeBox height={typeHeight}>
      <Content
        height={textHeight}
        width={'auto'}
        color={'#D6336C'}
        fontSize={fontSize}
        lineHeight={lineHeight}
        margin={'2px 4px 2px 4px'}
      >
        {type === 'USER' ? '유저' : '플래너'}
      </Content>
    </TypeBox>
  );
};

export default UserType;

interface TypeBoxProps {
  height: string;
}

const TypeBox = styled.div`
  height: ${(props: TypeBoxProps) => props.height};
  border-radius: 3px;
  background-color: #fff0f6;
  display: flex;
  justify-content: 'center';
  align-items: 'center';
`;
