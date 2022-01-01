import React, { FC } from 'react';
import UserInfoIcon from '../../component/UserInfoIcon';
import Container from './Container';
import { useHistory } from 'react-router-dom';
import { Company } from 'src/api/Company';

interface CompanyInfoProps {
  companyInfo: Company;
}

const CompanyInfo: FC<CompanyInfoProps> = ({ companyInfo }) => {
  const history = useHistory();

  const showCompanyDetail = () => {
    const companyId = companyInfo.id;
    history.push(`/company/${companyId}`);
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
