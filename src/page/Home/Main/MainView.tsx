import styled from 'styled-components';
import background from '../../../image/main_background.png';

interface DivisionBoxProps {
  marginBottom: number;
}

export const TopBox = styled.div`
  height: 320px;
  width: 1100px;
  border-radius: 10px;
  background-image: url(${background});
`;

export const DivisionBox = styled.span<DivisionBoxProps>`
  height: 56px;
  width: 1100px;
  margin-bottom: ${(props: DivisionBoxProps) => props.marginBottom};
  display: flex;
  justify-content: between;
  align-items: center;
`;

export const Tag = styled.div`
  box-sizing: border-box;
  height: 25px;
  border: 1px solid #ced4da;
  display: flex;
  margin-top: 21px;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
`;


