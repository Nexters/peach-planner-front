import { Title } from 'src/component/CommonStyle/style';
import styled from 'styled-components';

export default () => {
  return (
    <Container>
      <Page>
        <Row>
          <Cell width="35%">
            <Title height="27px" width="auto" fontSize="18px" lineHeight="27px" padding='24px 0 24px 16px'>
              메시지
            </Title>
          </Cell>
          <Cell width="65%">
            <Title height="20px" width="auto" fontSize="14px" lineHeight="20px" padding='24px 0 24px 16px'>
              송영주 플래너
            </Title>
          </Cell>
        </Row>

        <Row>
          <Cell width="30%">
            <Title height="24px" width="auto" fontSize="16px" lineHeight="24px" margin={'4px 0 4px 8px'}>
              메시지
            </Title>
          </Cell>
          <Cell width="70%">
          </Cell>
        </Row>
      </Page>
    </Container>
  );
};

const Container = styled.div`
  background-color: #e9ecef;
  padding: 0 8vw;
`;

const Page = styled.div`
  display: table;
  background-color: white;
  height: 100%;
  width: 100%;
`;

const Row = styled.div`
  display: table-row;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 20px 0;
`;

interface CellProps {
  width: string;
}

const Cell = styled.div<CellProps>`
  display: table-cell;
  width: ${(props: CellProps) => props.width};
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.05);
`;
