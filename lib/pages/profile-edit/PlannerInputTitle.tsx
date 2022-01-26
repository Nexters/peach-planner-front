import { Content } from 'lib/pages/components/style/style';
import styled from 'styled-components';

interface Props {
  name: string;
  margin: string;
}

const PlannerInputTitle = ({ name, margin }: Props) => {
  return (
    <Container margin={margin}>
      <Content height={'24px'} width={'auto'} color={'#495057'} fontSize={'16px'} lineHeight={'24px'}>
        {name}
      </Content>
      <Content
        height={'18px'}
        width={'auto'}
        color={'#FA5252'}
        fontSize={'12px'}
        lineHeight={'24px'}
        margin={'0 0 0 4px'}
      >
        {/* 필수 */}
      </Content>
    </Container>
  );
};

export default PlannerInputTitle;

interface ContainerProps {
  margin: string;
}

const Container = styled.div<ContainerProps>`
  margin: ${(props: ContainerProps) => props.margin};
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: auto;
`;
