import { Company } from 'lib/api/Company';
import styled from 'styled-components';

interface Props {
  name: string;
  location: string;
  profilePath: string;
  images: string[];
  handleClick: () => void;
}

const CompanyItem = ({
  profilePath,
  name,
  location,
  handleClick
}: Props) => {
  return (
    <Container onClick={handleClick}>
      <CompanyIcon src={profilePath}></CompanyIcon>
      <CompanyDescription>
        <CompanyTitle>{name}</CompanyTitle>
        <CompanyAddress>{location}</CompanyAddress>
      </CompanyDescription>
    </Container>
  );
};

export default CompanyItem;

const Container = styled.div`
  display: flex;
  margin-bottom: 8px;
  height: 40px;
  width: 400px;
  cursor: pointer;
`;

const CompanyDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ImageProps {
  src: string;
}

const CompanyIcon = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 40px;
  width: 40px;
  margin-right: 8px;
`;

const CompanyTitle = styled.div`
  height: 20px;
  width: auto;
  color: #212529;
  font-family: SpoqaHanSans;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 20px;
`;

const CompanyAddress = styled.div`
  height: 18px;
  width: auto;
  color: #868e96;
  font-family: SpoqaHanSans;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 18px;
`;
