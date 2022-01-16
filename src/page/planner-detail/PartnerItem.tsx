import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { PartnerInfo } from 'src/api/Planner';
import styled from 'styled-components';

interface PartnerItemProps {
  data: PartnerInfo;
}

const PartnerItem: FC<PartnerItemProps> = ({ data }) => {
  const history = useHistory();

  return (
    <Container onClick={() => {
      history.push(`/partner/${data.id}`);
    }}>
      <Image src={data.profilePath} />
      <Title>{data.name}</Title>
      <Detail>{data.location}</Detail>
    </Container>
  );
};

export default PartnerItem;

const Container = styled.div`
  margin-right: 15px;
  cursor: pointer;
`;

const Image = styled.img`
  border-radius: 10px;
  width: 160px;
  height: 160px;
  object-fit: cover;
`;

const Title = styled.div`
  margin-top: 8px;
  font-size: 13px;
`;

const Detail = styled.div`
width: 160px;
  font-size: 12px;
  color: #495057;
  text-overflow:ellipsis;
`;
