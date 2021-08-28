import { FC, useState } from 'react';
import styled from 'styled-components';
import HorizontalLine from './HorizontalLine';
import ArrowUp from '../assets/svg/ic_arrow_up.svg';
import ArrowDown from '../assets/svg/ic_arrow_down.svg';

interface Props {
  title: string;
}

const Accordion: FC<Props> = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <AccordionTitle onClick={() => setOpen(!isOpen)}>
        <HorizontalLine></HorizontalLine>
        <TitleContainer>
          <Title>{title}</Title>
          <Image src={isOpen ? ArrowDown : ArrowUp}></Image>
        </TitleContainer>
      </AccordionTitle>
      <AccordionItem isOpen={isOpen}>{children}</AccordionItem>
    </Container>
  );
};

export default Accordion;

const Container = styled.div`
  width: 200px;
`;

const AccordionTitle = styled.div`
  cursor: pointer;
`;

const TitleContainer = styled.div`
  display: felx;
  justify-content: space-between;
`;

const Title = styled.div`
  height: 20px;
  width: auto;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
`;

interface AccordionProps {
  isOpen: boolean;
}

const AccordionItem = styled.div<AccordionProps>`
  overflow: hidden;
  transition: ${(props: AccordionProps) =>
    props.isOpen ? 'max-height 1s cubic-bezier(0, 1, 0, 1)' : 'max-height 1s cubic-bezier(1, 0, 1, 0);'};
  height: auto;
  max-height: ${(props: AccordionProps) => (props.isOpen ? 9999 : 0)}; ;
`;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 24px;
  width: 24px;
  margin: 0;
  border-radius: 10px;
`;