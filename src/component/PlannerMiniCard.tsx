import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Content } from './style/style';

interface Props {
  id: number;
  plannerId: number;
  size: string;
  image: string;
  plannerName: string;
  companyName: string;
  margin?: string;
}

const PlannerMiniCard = ({ id, plannerId, size, image, plannerName, companyName, margin }: Props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/planner/${plannerId}`);
  };
  return (
    <Container margin={margin} onClick={handleClick}>
      <PlannerImage src={image} size={size}></PlannerImage>
      <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#212529" margin="8px 0px 0px 0px">
        {plannerName}
      </Content>
      <Content height="18px" width="auto" fontSize="12px" lineHeight="normal" color="#212529">
        {companyName}
      </Content>
    </Container>
  );
};

export default PlannerMiniCard;

interface ContainerProps {
  margin?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin: ${(props: ContainerProps) => (props?.margin ? props.margin : '0px')};
  cursor: pointer;
`;

interface PlannerImageProps {
  src: string;
  size: string;
}

const PlannerImage = styled.img.attrs((props: PlannerImageProps) => ({ src: props.src }))`
  height: ${(props: PlannerImageProps) => props.size}};
  width: ${(props: PlannerImageProps) => props.size}};
  border-radius: 10px;
`;
