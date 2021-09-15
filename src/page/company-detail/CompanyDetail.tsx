import React from 'react';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router';
import { useQuery } from 'react-query';
import { fetchCompany } from '../../api/Company';

interface routeProps {
  id: string;
}

const CompanyDetail = () => {
  const { params } = useRouteMatch<routeProps>();
  const companyId = params.id;

  const { data: companyInfo, error } = useQuery(['company', companyId], () => fetchCompany(companyId));

  console.log(companyInfo);

  return companyInfo ? (
    <Container>
      <Title>{companyInfo.name}</Title>
      <Information>
        <div>{companyInfo.location}</div>
        <div>{companyInfo.tel}</div>
      </Information>
    </Container>
  ) : (
    <>Loading</>
  );
};

export default CompanyDetail;

const Container = styled.div`
  width: 860px;
  margin: 40px auto 0 auto;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Information = styled.div`
  margin-top: 15px;
  display: flex;
  font-size: 14px;
  color: #495057;
  gap: 30px;
`;
