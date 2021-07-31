import styled from 'styled-components';

interface InputProps {
  height: string;
  width: string;
  placehoder?: string;
}

export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  height: ${(props: InputProps) => props.height};
  width: ${(props: InputProps) => props.width};
  placeholder: ${(props: InputProps) => props.placehoder};
  border: 1px solid #ced4da;
  padding: 13px;
  border-radius: 3px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ADB5BD;
    font-size: 13px;
  }
`;

export const TextArea = styled.textarea<InputProps>`
  box-sizing: border-box;
  height: ${(props: InputProps) => props.height};
  width: ${(props: InputProps) => props.width};
  padding: 13px;
  border: 1px solid #ced4da;
  border-radius: 3px;
`;
