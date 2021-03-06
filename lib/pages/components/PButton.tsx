import React, { FC } from 'react';
import styled from 'styled-components';

interface PBUttonProps {
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  border?: string;
  margin?: string;
  otherBgColor?: string;
  onClick?: () => void;
}

const PButton: FC<PBUttonProps> = ({
  color,
  width = '100%',
  height = 'auto',
  fontSize = '14px',
  fontWeight,
  padding = '11px',
  border,
  margin,
  children,
  otherBgColor,
  onClick
}) => {
  return (
    <Button
      color={color}
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeidght={fontWeight}
      padding={padding}
      border={border}
      margin={margin}
      otherBgColor={otherBgColor}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default PButton;

export const Button = styled.button<{
  width: string;
  height: string;
  padding: string;
  fontSize: string;
  fontWeidght: string | undefined;
  border: string | undefined;
  margin: string | undefined;
  otherBgColor: string | undefined;
}>`
  cursor: pointer;
  border-radius: 3px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeidght }) => fontWeidght};
  background-color: ${({ otherBgColor, color }) =>
    otherBgColor ? otherBgColor : color == 'pink' ? '#E64980' : 'white'};
  color: ${({ color }) => (color == 'pink' ? 'white' : 'black')};
  border: ${({ border, color }) => (border ? border : color == 'pink' ? 'none' : '1px solid #adb5bd')};
  margin: ${({ margin }) => margin};
`;
