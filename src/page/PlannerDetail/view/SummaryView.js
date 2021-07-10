import styled from 'styled-components';
import PButton from '../../../component/PButton';

export const Container = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const ImageContainer = styled.div`
  background-color: #e9ecef;
  flex: 1;
`;

export const InformationContainer = styled.div`
  flex: 1;
`;

export const InnerContainer = styled.div`
  padding: 32px;
`;

export const NameContainer = styled.div`
  display: flex;
  margin-bottom: 6px;
  justify-content: space-between;

  div {
    font-size: 14px;
  }
`;

export const CompanyName = styled.div`
  color: #e64980;
  font-size: 16px;
  font-weight: bold;
`;

export const BoldGray = styled.div`
  margin-bottom: 4px;
  font-size: 13px;
  color: #868e96;
`;

export const OneLine = styled.div`
  font-size: 14px;
`;

export const ButtonContainer = styled.div`
  margin-top: 13.5px;
  display: flex;

  button + button {
    margin-left: 13px;
  }
`;
