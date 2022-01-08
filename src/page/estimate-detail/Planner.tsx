import { Title } from 'src/component/style/style';
import styled from 'styled-components';

interface Props {
  plannerImage: string;
  plannerName: string;
  companyName: string;
}

const Planner = ({ plannerImage, plannerName, companyName }: Props) => {
  return (
    <Container>
      <InnerContainer>
        <Image src={plannerImage}></Image>
        <ProfileDescription>
          <Title height="27px" width="auto" fontSize="18px" color="#000" lineHeight="normal" margin="8px 0px 4px 0px">
            {plannerName}
          </Title>
          <Content>{companyName}</Content>
          <Noti>견적 요청이 아닌 웨딩 계약서는 플래너에게 따로 요청해 주세요.</Noti>
        </ProfileDescription>
      </InnerContainer>
    </Container>
  );
};

export default Planner;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 860px;
  height: 200px;
  border-bottom: 1px solid;
  border-bottom-color: #e9ecef;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 860px;
  height: 120px;
`;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 120px;
  width: 120px;
  margin: 0px 24px 0px 0px;
`;

const ProfileDescription = styled.div``;

const Content = styled.div`
  height: 24px;
  width: auto;
  color: #000;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
`;

const Noti = styled.div`
  height: 19px;
  width: auto;
  color: #868e96;
  font-size: 14px;
  letter-spacing: 0;
  line-height: normal;
  margin: 8px 0px 0px 0px;
`;
