import { FC, useState } from 'react';
import styled from 'styled-components';
import HorizontalLine from './HorizontalLine';
import ArrowUp from 'public/assets/svg/ic_arrow_up.svg';
import ArrowDown from 'public/assets/svg/ic_arrow_down.svg';

interface Props {
  title: string;
  margin: string;
}

const Accordion: FC<Props> = ({ title, margin, children }) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <Container margin={margin}>
      <AccordionTitle onClick={() => setOpen(!isOpen)}>
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

interface ContainerProps {
  margin: string;
}

const Container = styled.div<ContainerProps>`
  margin: ${(props: ContainerProps) => props.margin};
  width: 200px;
`;

const AccordionTitle = styled.div`
  cursor: pointer;
  height: 32px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: solid 1px #212529;
`;

const Title = styled.div`
  height: 20px;
  width: auto;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  margin-top: 6px;
  margin-bottom: 6px;
`;

interface AccordionProps {
  isOpen: boolean;
}

const AccordionItem = styled.div<AccordionProps>`
  overflow: hidden;
  transition: ${(props: AccordionProps) =>
    props.isOpen ? 'max-height 1s cubic-bezier(0, 1, 0, 1)' : 'max-height 1s cubic-bezier(1, 0, 1, 0);'};
  height: auto;
  max-height: ${(props: AccordionProps) => (props.isOpen ? 9999 : 0)};
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
