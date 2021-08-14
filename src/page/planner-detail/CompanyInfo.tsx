import React, { FC } from 'react';
import UserInfoIcon from '../../component/UserInfoIcon';
import Container from './Container';
import { Company } from '../../api/Planner';

interface CompanyInfoProps {
  companyInfo: Company;
}

const CompanyInfo: FC<CompanyInfoProps> = ({ companyInfo }) => {
  return (
    <Container title="업체정보">
      <UserInfoIcon imgSrc={companyInfo.profilePath} title={companyInfo.name} buttonText="프로필 보기" />
    </Container>
  );
};

export default CompanyInfo;
