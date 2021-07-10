import styled from 'styled-components';

export const LoginPageBox = styled.div``;

export const MyPageSpan = styled.span`
  height: 20px;
  color: ${(props) => props.color || '#495057'};
  font-family: SpoqaHanSans;
  font-size: ${(props) => props.size || '14px'};
  letter-spacing: 0;
  line-height: 20px;
  font-weight: ${(props) => props.weight || 'bold'};
  cursor: ${(props) => props.cursor || 'default'};
`;

export const MyPageButton = styled.button`
  height: ${(props) => props.height || '48px'};
  width: ${(props) => props.width || '48px'};
  border-radius: ${(props) => props.radius || '100%'};
  background-color: ${(props) => props.background || '#e64980'};
  outline: none;
  border: ${(props) => props.border || 'none'};
  color: ${(props) => props.color || '#ffffff'};
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
  box-sizing: ${(props) => props.box || 'border-box'};
  cursor: pointer;
`;

export const FlexDiv = styled.div`
  width: ${(props) => props.width || '100%'};
  display: flex;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  flex-direction: ${(props) => props.direction || 'row'};
  margin: ${(props) => props.margin || '20px 0'};
  height: 100vh;
`;

export const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImgBox = styled.div`
  height: 88px;
  width: 88px;
  background-color: #adb5bd;
  border-radius: 100%;
`;

export const SideMenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 21px;
`;

export const Line = styled.hr`
  height: 1px;
  width: 200px;
  background-color: #212529;
  margin: 16px 0;
`;

export const SideMenuItem = styled.li`
  height: 17px;
  color: #212529;
  font-family: 'Apple SD Gothic Neo';
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17px;
  margin: 12px 0;
  cursor: pointer;
`;
