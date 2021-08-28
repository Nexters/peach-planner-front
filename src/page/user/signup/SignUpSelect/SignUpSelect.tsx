import React, { useState } from 'react';
import PButton from '../../../../component/PButton';
import { FlexDiv, Title } from '../../../../component/style/style';
import CompanySignUp from '../CompanySignUp/CompanySignUp';
import PlannerSignUp from '../PlannerSignUp/PlannerSignUp';

const SignUpSelect = () => {
  const [selectedSignUp, setSelectedSignUp] = useState('');
  const [isSelectedType, setIsSelectedType] = useState(false);

  const checkSignUpSelect = (type: string) => {
    setSelectedSignUp(type);
  };

  const handleSignUpSelect = () => {
    if (selectedSignUp) {
      setIsSelectedType(true);
      return;
    } else {
      alert('웨딩플래너 또는 웨딩업체를 선택해 주세요.');
      return;
    }
  };

  return (
    <FlexDiv direction={'column'}>
      {isSelectedType ? (
        <>{selectedSignUp === 'planner' ? <PlannerSignUp /> : <CompanySignUp />}</>
      ) : (
        <>
          <Title color={'#212529'} height={'24px'} fontSize={'18px'} lineHeight={'27px'} margin={'40px 0 8px'}>
            플래너 가입
          </Title>
          <Title color={'#868E96'} height={'19px'} fontSize={'13px'} lineHeight={'19px'}>
            웨딩플래너 또는 웨딩업체를 선택해 주세요.
          </Title>
          <PButton
            color="#212529"
            width="312px"
            height="40px"
            fontSize="13px"
            padding="0"
            margin={'22.5px 0 15px'}
            border={selectedSignUp === 'planner' ? '1px solid #E64980' : undefined}
            onClick={() => checkSignUpSelect('planner')}
          >
            웨딩플래너 가입하기
          </PButton>
          <PButton
            color="#212529"
            width="312px"
            height="40px"
            fontSize="13px"
            padding="0"
            border={selectedSignUp === 'company' ? '1px solid #E64980' : undefined}
            onClick={() => checkSignUpSelect('company')}
          >
            업체 가입하기
          </PButton>
          <PButton
            color="pink"
            width="312px"
            height="40px"
            fontSize="14px"
            padding="0"
            margin={'15.5px 0 0'}
            onClick={handleSignUpSelect}
          >
            계속
          </PButton>
        </>
      )}
    </FlexDiv>
  );
};

export default SignUpSelect;
