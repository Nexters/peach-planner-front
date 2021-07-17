import styled from 'styled-components';

interface InputProps {
  height: string;
  width: string;
}

export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  height: ${(props: InputProps) => props.height};
  width: ${(props: InputProps) => props.width};
  border: 1px solid #ced4da;
  border-radius: 3px;
`;

export const TextArea = styled.textarea<InputProps>`
  box-sizing: border-box;
  height: ${(props: InputProps) => props.height};
  width: ${(props: InputProps) => props.width};
  border: 1px solid #ced4da;
  border-radius: 3px;
`;