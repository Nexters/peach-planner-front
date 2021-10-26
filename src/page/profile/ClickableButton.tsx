import { useState } from 'react';
import styled from 'styled-components';
import { Item } from '.';
import { Content } from '../../component/style/style';

interface Props {
  items: Item[];
  handleItems: (items: Item[]) => void;
  content: Item;
}

const ClickableButton = ({ items, handleItems, content }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      handleItems(items.concat(content));
    } else {
      const removedItems = items.filter((item) => item !== content);
      handleItems(removedItems);
    }
    setIsClicked(!isClicked);
  };

  return (
    <>
      <Circle
        border={isClicked ? '1px solid #E64980' : '1px solid #ced4da'}
        backgroundColor={isClicked ? '#E64980' : ''}
        onClick={handleClick}
      >
        <Content
          height={'24px'}
          width={'auto'}
          color={isClicked ? '#FFFFFF' : '#868E96'}
          fontSize={'13px'}
          lineHeight={'32px'}
          margin={'9px 20px 9px 20px'}
        >
          {content.display}
        </Content>
      </Circle>
    </>
  );
};

export default ClickableButton;

interface CircleProps {
  border: string;
  backgroundColor?: string;
}

const Circle = styled.div<CircleProps>`
  box-sizing: border-box;
  height: 37px;
  width: auto;
  border: ${(props: CircleProps) => props.border};
  background-color: ${(props: CircleProps) => (props.backgroundColor ? props.backgroundColor : '')};
  border-radius: 20.5px;
  cursor: pointer;
  margin: 0px 7px 11px 0px;
`;
