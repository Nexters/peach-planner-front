import { Content, Title } from 'src/component/style/style';
import styled from 'styled-components';

interface Props {
  content: string;
  count: number;
}

const ContentNotification = ({ content, count }: Props) => {
  return (
    <Box>
      <Content height="24px" width="auto" fontSize="16px" color="#495057" lineHeight="normal" margin="0px 0px 0px 16px">
        {content}
      </Content>
      <Title height="24px" fontSize="16px" lineHeight="normal" color="#d6336c" margin="0px 16px 0px 0px">
        {count}
      </Title>
    </Box>
  );
};

export default ContentNotification;

const Box = styled.div`
  width: 270px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
