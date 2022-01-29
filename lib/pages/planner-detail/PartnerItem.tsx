import React, { FC } from 'react';
import { PartnerInfo } from 'lib/api/Planner';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface PartnerItemProps {
  data: PartnerInfo;
}

const PartnerItem: FC<PartnerItemProps> = ({ data }) => {
  return (
    <Link href={ `/partner/${data.id}` }>
      <a style={ { textDecoration: 'none' } }>
        <Container>
          <Image src={ data.profilePath } />
          <Title>{ data.name }</Title>
          <Detail>{ data.location }</Detail>
        </Container>
      </a>
    </Link>
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
  color: black;
`;

const Detail = styled.div`
width: 160px;
  font-size: 12px;
  color: #495057;
  text-overflow:ellipsis;
`;
