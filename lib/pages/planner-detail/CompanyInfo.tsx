import React, { FC } from 'react';
import UserInfoIcon from 'lib/pages/components/UserInfoIcon';
import Container from './Container';
import { Company } from 'lib/api/Company';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface CompanyInfoProps {
  companyInfo: Company;
}

const CompanyInfo: FC<CompanyInfoProps> = ({ companyInfo }) => {
  return (
    <Container title="업체정보">
      <Link href={ `/company/${companyInfo.id}` } >
        <a style={ { textDecoration: 'none' } }>
          <UserInfoIcon
            imgSrc={ companyInfo.profilePath }
            title={ companyInfo.name }
            buttonText="프로필 보기"
          />
        </a>
      </Link>
    </Container >
  );
};

export default CompanyInfo;
