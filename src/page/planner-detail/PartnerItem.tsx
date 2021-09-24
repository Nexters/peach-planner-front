import React, { FC } from 'react';
import { PartnerInfo } from 'src/api/Planner';
import styled from 'styled-components';

interface PartnerItemProps {
  data: PartnerInfo;
}

const PartnerItem: FC<PartnerItemProps> = ({ data }) => {
  return (
    <Container>
      <Image src={data.primaryImage} />
      <Title>{data.name}</Title>
      <Detail>{data.location}</Detail>
    </Container>
  );
};

export default PartnerItem;

const Container = styled.div`
  flex: 1;
  margin-right: 15px;
`;

const Image = styled.img`
  border-radius: 10px;
  width: 160px;
  height: 160px;
`;

const Title = styled.div`
  margin-top: 8px;
  font-size: 13px;
`;

const Detail = styled.div`
  font-size: 12px;
  color: #495057;
`;
