import React, { FC } from 'react';
import { fetchPlannerPartners } from 'lib/api/Planner';
import Container from './Container';
import PartnerRow from './PartnerRow';
import { useQuery } from 'react-query';
import { EmptyText } from 'lib/pages/components/EmptyText';

interface PartnerInfoProps {
  plannerId: string;
}

export const PartnerInfo: FC<PartnerInfoProps> = ({ plannerId }) => {
  const { data: partnerInfo } = useQuery(['partners', plannerId], () => fetchPlannerPartners(plannerId));

  return (
    <Container title="제휴 업체 정보">
      {
        partnerInfo && Object.keys(partnerInfo).length ?
          <>
            <PartnerRow title="스튜디오" partner={partnerInfo.STUDIO} />
            <PartnerRow title="드레스" partner={partnerInfo.DRESS} />
            <PartnerRow title="메이크업" partner={partnerInfo.MAKEUP} />
          </> :
          <EmptyText>등록되어 있는 제휴 업체가 없습니다.</EmptyText>
      }
    </Container>
  );
};

