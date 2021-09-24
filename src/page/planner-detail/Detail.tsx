import React, { FC } from 'react';
import styled from 'styled-components';
import Container from './Container';
import { ReactComponent as Check } from '../../assets/svg/ic_check.svg';
import { Planner } from '../../api/Planner';
interface DetailProps {
  plannerInfo: Planner;
}

const Detail: FC<DetailProps> = ({ plannerInfo }) => {
  const DETAIL_LIST = plannerInfo.locations;
  const SUPPORT_INFO = plannerInfo.supportInfos;

  return (
    <Container title="플래너가 담당해요">
      <InnerContainer>
        {DETAIL_LIST.map((detail, i) => (
          <DetailItem key={i}>
            <Check /> {detail}
          </DetailItem>
        ))}
        {SUPPORT_INFO.map((detail, i) => (
          <DetailItem key={i}>
            <Check /> {detail}
          </DetailItem>
        ))}
      </InnerContainer>
    </Container>
  );
};

export default Detail;

const InnerContainer = styled.div`
  margin-top: 13px;
  display: flex;
`;

const DetailItem = styled.span`
  margin-right: 8px;
  display: flex;
`;
