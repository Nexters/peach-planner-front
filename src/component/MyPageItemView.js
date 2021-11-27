import styled, { css } from 'styled-components';

export const MyPageItemSpan = styled.span`
  height: 19px;
  color: ${(props) => props.color || '#000000'};
  font-size: ${(props) => props.size || '16px'};
  letter-spacing: 0;
  line-height: 20px;
  font-weight: ${(props) => props.weight || 'bold'};
  cursor: ${(props) => props.cursor || 'default'};
  margin: ${(props) => props.margin || '0'};
`;

export const MyPageButton = styled.button`
  height: ${(props) => props.height || '48px'};
  width: ${(props) => props.width || '48px'};
  border-radius: ${(props) => props.radius || '100%'};
  background-color: ${(props) => props.background || props.theme.colors.pink};
  outline: none;
  border: ${(props) => props.border || 'none'};
  color: ${(props) => props.color || '#ffffff'};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
  box-sizing: ${(props) => props.box || 'border-box'};
  cursor: pointer;
  margin: ${(props) => props.margin || '0'};
`;

export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  flex-direction: ${(props) => props.direction || 'row'};
  margin: ${(props) => props.margin || '20px 0'};
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
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17px;
  margin: 12px 0;
  cursor: pointer;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: ${(props) => props.margin || '0 16px'};
`;

export const More = styled.span`
  text-underline-position: underline;
  text-decoration: underline;
  height: 19px;
  color: #000000;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 19px;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const TR = styled.tr`
  border-top: 1px solid #212529;
  border-bottom: 1px solid #212529;
  border-collapse: collapse;
  height: ${(props) => props.height || '64px'};
`;

export const TH = styled.th`
  width: ${(props) => props.width || '480px'};
  text-align: center;
`;

export const TD = styled.td`
  width: ${(props) => props.width || '480px'};
  text-align: center;
`;

export const CardImg = styled.img.attrs((props) => ({
  src: props.src
}))`
  cursor: pointer;
  height: ${(props) => props.height || '130px'};
  width: ${(props) => props.width || '130px'};
  border-radius: 10px;
`;

export const EnterpriseDiv = styled.div`
  height: 270px;
  width: 430px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 #adb5bd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 26px;
`;

export const SettingTitle = styled.span`
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  margin: ${(props) => props.margin || '0px'};
`;

export const SettingLabel = styled.label`
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  margin: 16px 0 8px;
`;

export const SettingInfoBox = styled.div`
  width: 279px;
  height: 40px;
  padding: 0 12px;
  border-radius: 3px;
  border: ${(props) => props.focus && '1px solid #e64980'};
  background-color: ${(props) => (props.focus ? 'transparent' : '#ced4da')};
  display: flex;
  align-items: center;
  :nth-child(1) {
    margin-right: 10px;
  }
`;

export const SettingInfo = styled.span`
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  :nth-child(2) {
    margin: 8px 0 19px;
  }
`;

export const SettingButtonText = styled.span`
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #212529;
`;

export const SettingButton = styled.button`
  width: ${(props) => (props.w ? props.w : '105')}px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: ${(props) => (props.c ? props.c : '#f1f3f5')};
  cursor: pointer;
  margin-right: 5px;
  ${(props) =>
    props.c &&
    css`
      ${SettingButtonText} {
        color: #ffffff;
      }
    `}
`;

export const SettingBox = styled.div`
  padding: ${(props) => (props.padding ? props.padding : '8px 0 40px')};
  border-top: 1px solid #e9ecef;
  width: 100%;
  display: flex;
  flex-direction: column;
  :nth-child(1) {
    height: 336px;
  }
  :nth-child(2) {
    height: 201px;
  }
`;

export const ImgBox = styled.div`
  width: 64px;
  height: 64px;
  background-color: #dee2e6;
  margin: 10px 0 15px;
  border-radius: 100%;
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type
}))`
  width: 279px;
  height: 40px;
  background: transparent;
  border: 1px solid #ced4da;
  outline: none;
`;
