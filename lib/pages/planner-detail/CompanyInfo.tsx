import React, { FC } from 'react';
import UserInfoIcon from 'lib/pages/components/UserInfoIcon';
import Container from './Container';
import { Company } from 'lib/api/Company';
import { useRouter } from 'next/router';

interface CompanyInfoProps {
  companyInfo: Company;
}

const CompanyInfo: FC<CompanyInfoProps> = ({ companyInfo }) => {
  const router = useRouter();

  const showCompanyDetail = () => {
    const companyId = companyInfo.id;
    router.push(`/company/${companyId}`);
  };

  return (
    <Container title="업체정보">
      <UserInfoIcon
        imgSrc={companyInfo.profilePath}
        title={companyInfo.name}
        buttonText="프로필 보기"
        onButtonClick={showCompanyDetail}
      />
    </Container>
  );
};

export default CompanyInfo;
