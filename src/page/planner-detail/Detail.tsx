import React, { FC } from 'react';
import styled from 'styled-components';
import Container from './Container';
import { ReactComponent as Check } from '../../assets/svg/ic_check.svg';
import { Planner } from '../../api/Planner';
import { EmptyText } from './components/styles';
interface DetailProps {
  plannerInfo: Planner;
}

const Detail: FC<DetailProps> = ({ plannerInfo }) => {
  const list = plannerInfo.locations.concat(plannerInfo.supportInfos).filter(e => e !== '');

  return (
    <Container title="플래너가 담당해요">
      <InnerContainer>
        {list.map((detail, i) => (
          <DetailItem key={i}>
            <Wrap>
              <Check /> {detail}
            </Wrap>
          </DetailItem>
        ))}
        {list.length === 0 && <EmptyText>담당하고 있는 항목이 없습니다.</EmptyText>}
      </InnerContainer>
    </Container>
  );
};

export default Detail;

const InnerContainer = styled.div`
  // margin-top: 13px;
`;

const DetailItem = styled.span`
  margin-right: 8px;
  display: inline-block;
`;

const Wrap = styled.div`
  display: flex;
  line-height: 24px;
`;
