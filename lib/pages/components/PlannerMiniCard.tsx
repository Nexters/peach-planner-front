import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  return (
    <Link href={ `/planner/${plannerId}/detail` }>
      <a style={{textDecoration:'none'}}>
        <Container margin={ margin }>
          <PlannerImage src={ image } size={ size } />
          <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#212529" margin="8px 0px 0px 0px">
            { plannerName }
          </Content>
          <Content height="18px" width="auto" fontSize="12px" lineHeight="normal" color="#212529">
            { companyName }
          </Content>
        </Container>
      </a>
    </Link>
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
