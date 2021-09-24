import React, { FC } from 'react';
import { fetchPlannerPartners } from 'src/api/Planner';
import Container from './Container';
import PartnerRow from './PartnerRow';
import { useQuery } from 'react-query';

interface PartnerInfoProps {
  plannerId: string;
}

const PartnerInfo: FC<PartnerInfoProps> = ({ plannerId }) => {
  const { data: partnerInfo } = useQuery(['partners', plannerId], () => fetchPlannerPartners(plannerId));
  return partnerInfo ? (
    <Container title="제휴 업체 정보">
      <PartnerRow title="스튜디오" partner={partnerInfo.STUDIO} />
      <PartnerRow title="메이크업" partner={partnerInfo.MAKEUP} />
    </Container>
  ) : (
    <></>
  );
};

export default PartnerInfo;
