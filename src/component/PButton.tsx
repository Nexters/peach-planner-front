import React, { FC } from 'react';
import styled from 'styled-components';

interface PBUttonProps {
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  padding?: string;
  border?: string;
  onClick?: () => void;
}

const PButton: FC<PBUttonProps> = ({
  color,
  width = '100%',
  height = 'auto',
  fontSize = '14px',
  padding = '11px',
  border,
  children,
  onClick
}) => {
  return (
    <Button
      color={color}
      width={width}
      height={height}
      fontSize={fontSize}
      padding={padding}
      border={border}
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
  border: string | undefined;
}>`
  cursor: pointer;
  border-radius: 3px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ color }) => (color == 'pink' ? '#E64980' : 'white')};
  color: ${({ color }) => (color == 'pink' ? 'white' : 'black')};
  border: ${({ border, color }) => (border ? border : color == 'pink' ? 'none' : '1px solid #adb5bd')};
`;
