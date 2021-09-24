import React, { FC } from 'react';
import Container from './Container';
import PartnerRow from './PartnerRow';

export interface DetailInformation {
  name: string;
  location: string;
}

export interface PartnerInformation {
  title: string;
  data: DetailInformation[];
}

interface PartnerInfoProps {
  partnerInfo: any;
}

const PartnerInfo: FC<PartnerInfoProps> = ({ partnerInfo }) => {
  // const PARTNER_INFO: PartnerInformation[] = [
  //   {
  //     title: '스튜디오',
  //     data: [
  //       { name: '마이퍼스트레이디', location: '서울 강남' },
  //       { name: '루나', location: '서울 강남' },
  //       { name: '비포원', location: '서울 강남' },
  //       { name: '스튜디오해밀', location: '서울 강남' },
  //       { name: '줄리의 정원', location: '서울 강남' }
  //     ]
  //   },
  //   {
  //     title: '드레스',
  //     data: [
  //       { name: '로즈로사', location: '서울 강남' },
  //       { name: '제시카로렌', location: '서울 강남' },
  //       { name: '클라라', location: '서울 강남' },
  //       { name: '셀렉션H', location: '서울 강남' },
  //       { name: '라비노체', location: '서울 강남' }
  //     ]
  //   },
  //   {
  //     title: '메이크업',
  //     data: [
  //       { name: '에이컨셉', location: '서울 강남' },
  //       { name: '에스휴', location: '서울 강남' },
  //       { name: '이경민포레', location: '서울 강남' },
  //       { name: '보보리스', location: '서울 강남' },
  //       { name: '뷰티진동회', location: '서울 강남' }
  //     ]
  //   }
  // ];

  return partnerInfo ? (
    <Container title="제휴 업체 정보">
      {/* {partnerInfo.map((partner, i) => (
        <PartnerRow info={partner} key={i} />
      ))} */}
    </Container>
  ) : (
    <></>
  );
};

export default PartnerInfo;
