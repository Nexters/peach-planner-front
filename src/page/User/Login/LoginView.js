import styled from 'styled-components';

export const LoginPageBox = styled.div``;

export const LoginSpan = styled.span`
  height: 20px;
  color: ${(props) => props.color || '#495057'};
  font-size: ${(props) => props.size || '14px'};
  letter-spacing: 0;
  line-height: 20px;
  font-weight: ${(props) => props.weight || 'bold'};
  cursor: ${(props) => props.cursor || 'default'};
`;

export const Form = styled.form``;

export const LogInButton = styled.button`
  height: ${(props) => props.height || '48px'};
  width: ${(props) => props.width || '48px'};
  border-radius: ${(props) => props.radius || '100%'};
  background-color: ${(props) => props.background || '#e64980'};
  outline: none;
  border: ${(props) => props.border || 'none'}; // 1px solid #e64980;
  color: ${(props) => props.color || '#ffffff'}; //#e64980
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
  box-sizing: ${(props) => props.box || 'border-box'};
  cursor: pointer;
`;

export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  flex-direction: ${(props) => props.direction || 'row'};
  margin: ${(props) => props.margin || '20px 0'};
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type || 'text'
}))`
  box-sizing: border-box;
  height: 41px;
  width: 313px;
  border: 1px solid #ced4da;
  border-radius: 3px;
  color: #adb5bd;
  font-size: 13px;
`;
