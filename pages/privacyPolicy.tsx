import React from 'react';
import { BigTitle, Description, SmallTitle, Gap } from 'lib/pages/signup-detail/SignupDetailStyles';
import { SignupDetailTemplate } from 'lib/pages/signup-detail/SignupDetailTemplate';

export default () => {
  return (
    <SignupDetailTemplate title="개인정보처리방침">
      <BigTitle>1. 수집하는 개인정보 항목</BigTitle>
      <Description>피치플래너는 회원가입, 서비스 이용 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</Description>
      <SmallTitle>1) 수집항목</SmallTitle>
      <Description>일반 회원 가입시</Description>
      <Description> • 필수항목 : 아이디, 비밀번호, 별명, 이메일</Description>
      <Description> • 선택항목 : SNS정보</Description>
      <Gap />
      <Description>플래너 회원 가입시</Description>
      <Description> • 필수항목 : 업체명, 업종, 이름, 연락처, 이메일</Description>
      <Description> • 선택항목 : 사업자등록번호</Description>
      <Gap />
      <Description>선택정보를 입력하지 않은 경우에도 서비스 이용의 제한은 없습니다.</Description>
      <Description>본인인증과정에서 아래와 같은 정보들이 수집됩니다.</Description>
      <Description> • 성명, 생년월일, 성별</Description>
      <Description>서비스 이용과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.</Description>
      <Description> • IP 주소, 쿠키, 서비스 이용기록, 회원조치이력</Description>
      <SmallTitle>2) 개인정보 수집방법</SmallTitle>
      <Description>회원가입, 서비스 이용 신청, 회원정보 수정, 장터 게시물 등록</Description>
      <BigTitle>2. 개인정보의 수집 및 이용목적</BigTitle>
      <Description>
        피치플래너는 수집한 개인정보를 다음의 목적을 위해 활용하며 다른 용도로는 사용되지 않습니다.
      </Description>
      <Description>차후 이용목적이 변경될 시에는 사전에 동의를 구합니다.</Description>
      <Description>
        1. 아이디, 비밀번호, 별명 : 서비스 이용에 따른 본인식별, 중복가입 확인, 부정이용 방지를 위해 사용됩니다.
      </Description>
      <Description>
        2. 이메일 : 전체메일발송, 패스워드 분실시 필요한 정보제공 및 민원처리 등을 위해 사용됩니다.
      </Description>
      <Description>
        3. 성명, 생년월일, 성별 : 연령, 성별로 제한하는 특수한 서비스를 제공할 경우 및 내부 마케팅 자료구축, 부정이용
        방지를 위해 사용됩니다.
      </Description>
      <Description> 4. SNS 정보 : 회원이 자신의 SNS를 공개하고자 할 경우 사용합니다.</Description>
      <Description>
        5. 이용자의 IP주소, 방문일시 : 불량회원의 부정 이용방지와 비인가 사용방지, 통계학적 분석에 사용됩니다.
      </Description>
      <Description> 6. 그 외 선택사항 : 개인 맞춤 서비스를 제공하기 위해 사용됩니다.</Description>
      <BigTitle>3. 개인정보의 보유 및 이용기간</BigTitle>
      <Description>
        피치플래너는 회원가입일로부터 서비스를 제공하는 기간 동안에 한하여 이용자의 개인정보를 보유 및 이용합니다.
      </Description>
      <Description>단, 다음의 정보에 대해서는 회원탈퇴 후 아래의 이유로 명시한 기간 동안 보존합니다.</Description>
      <Description> • 보존항목 : 성명, 생년월일, 성별, 이메일</Description>
      <Description> • 보존근거 : 빈번한 가입과 탈퇴를 반복하는 악의적 이용 방지, 서비스 이용의 혼선 방지</Description>
      <Description> • 보존기간 : 30일</Description>
      <Description> • 보존항목 : "경고"이상의 조치를 받은 회원의 DI값 (중복가입확인정보) 및 회원조치이력</Description>
      <Description> • 보존근거 : 회원의 불량 이용에 대한 조치이력 보관으로 악의적 이용의 재발 방지</Description>
      <Description> • 보존기간 : 5년</Description>
      <Description> • 보존항목 : 아이디</Description>
      <Description>
        • 보존근거 : 아이디를 기준으로 설계되어 있어 탈퇴 후 타인이 동일한 아이디로 가입할 경우 서비스 이용의 혼선 방지
      </Description>
      <Description> • 보존기간 : 서비스 제공 종료시까지</Description>
      <Description> • 보존항목 : 장터 거래시 판매자 정보</Description>
      <Description> • 보존근거 : 사기 등 범죄 발생시 참고목적</Description>
      <Description> • 보존기간 : 1년</Description>
      <BigTitle>4. 개인정보의 파기절차 및 방법</BigTitle>
      <Description>
        원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과
        같습니다.
      </Description>
      <Description>1) 파기절차</Description>
      <Description>
        회원이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에
        따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.
      </Description>
      <Description>
        일정기간 저장된 개인정보는 법령에 의한 경우를 제외하고는 보유 목적 이외의 다른 목적으로 이용되지 않습니다.
      </Description>
      <Description>2) 파기방법</Description>
      <Description>
        전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
      </Description>
      <BigTitle>5. 개인정보 제공</BigTitle>
      <Description>
        피치플래너는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
      </Description>
      <Description> • 이용자들이 사전에 동의한 경우</Description>
      <Description>
        • 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
      </Description>
      <Gap />
      <Description>현재 개인정보 제공 업체</Description>
      <Description> • 업체명 : 한국신용정보 (http://www.idcheck.co.kr)</Description>
      <Description> • 제공 사유 : 개인인증</Description>
      <Description> • 제공 정보 : 개인 식별정보</Description>
      <BigTitle>6. 수집한 개인정보의 위탁</BigTitle>
      <Description>
        피치플래너는 회원의 동의없이 회원 정보를 외부 업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁
        대상자와 위탁 업무 내용에 대해 회원에게 통지하고 필요한 경우 사전 동의를 받도록 하겠습니다.
      </Description>
      <BigTitle>7. 회원 및 법정대리인의 권리와 그 행사방법</BigTitle>
      <Description>
        회원 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수
        있으며 가입해지를 요청할 수도 있습니다.
      </Description>
      <Description>
        회원 혹은 만 14세 미만 아동의 개인정보 조회/수정을 위해서는 ‘개인정보변경’(또는 ‘회원정보수정’ 등)을,
        가입해지(동의철회)를 위해서는 “회원탈퇴”를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가
        가능합니다.
      </Description>
      <Description>
        혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.
      </Description>
      <Gap />
      <Description>
        개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지
        않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여
        정정이 이루어지도록 하겠습니다.
      </Description>
      <Gap />
      <Description>
        피치플래너는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 “개인정보의 보유 및 이용기간”에
        명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
      </Description>
      <BigTitle>8. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</BigTitle>
      <Description>
        피치플래너는 이용자의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 피치플래너의
        웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터
        하드디스크에 저장됩니다. 피치플래너는 다음과 같은 목적을 위해 쿠키를 사용합니다.
      </Description>
      <SmallTitle>쿠키 등 사용 목적</SmallTitle>
      <Description>
        • 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 방문 회수 파악
        등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공
      </Description>
      <Description>
        이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹브라우저에서 옵션을 설정함으로써 모든
        쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
      </Description>
      <SmallTitle>쿠키 설정 거부 방법</SmallTitle>
      <Description>
        • 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나
        쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
      </Description>
      <SmallTitle>설정방법 예(인터넷 익스플로어의 경우)</SmallTitle>
      <Description> • 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보</Description>
      <Description>단, 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.</Description>
      <BigTitle>9. 개인정보의 기술적, 관리적 보호대책</BigTitle>
      <Description>
        피치플래너는 이용자의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안정성
        확보를 위해 다음과 같은 기술적, 관리적 대책을 강구하고 있습니다.
      </Description>
      <Gap />
      <SmallTitle>1) 개인정보의 암호화</SmallTitle>
      <Description>
        이용자의 개인정보는 비밀번호에 의해 보호되며, 비밀번호 등 중요 데이터는 파일 및 전송데이터를 복호화할 수 없도록
        단방향 암호화하여 보호합니다.
      </Description>
      <Gap />
      <SmallTitle>2) 해킹 등의 대비한 기술적 대책</SmallTitle>
      <Description>
        해킹이나 컴퓨터 바이러스 등에 의해 이용자의 개인정보가 유출되거나 훼손되는 것을 막기 위해 외부로부터 접근이
        통제된 구역에 시스템을 설치하고 침입차단장치 및 침입탐지시스템을 설치하여 24시간 감시하고 있습니다.
      </Description>
      <SmallTitle>3) 개인 아이디와 비밀번호의 관리</SmallTitle>
      <Description>
        이용자가 사용하는 아이디와 비밀번호는 원칙적으로 이용자만이 사용할 수 있도록 되어 있습니다. 피치플래너는
        이용자의 개인적인 부주의로 아이디, 비밀번호 등 개인정보가 유출되어 발생한 문제와 기본적인 인터넷의 위험성 때문에
        일어나는 일들에 대해 책임을 지지 않습니다. 비밀번호에 대한 보안의식을 가지고 비밀번호를 자주 변경하며, 타인이
        알기 쉬운 비밀번호를 사용하거나, 공용 PC 에서의 로그인시 개인정보가 누출되지 않도록 각별한 주의를 기울여 주시기
        바랍니다.
      </Description>
      <BigTitle>10. 개인정보에 관한 민원서비스</BigTitle>
      <Description>
        회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보관리책임자를
        지정하고 있습니다.
      </Description>
      <Description>
        이용자는 피치플래너의 서비스를 이용하며 발생하는 모든 개인정보보호 관련 민원을 개인정보 관리책임자에게 신고하실
        수 있습니다.
      </Description>
      <Gap />
      <SmallTitle>개인정보관리책임자</SmallTitle>
      <Description> • 성명 : 박철완</Description>
      <Description> • Tel : 070–4715-6450</Description>
      <Description> • 메일 : florencelab@naver.com</Description>
      <Gap />
      <Description>
        기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
      </Description>
      <Gap />
      <Description> • 개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)</Description>
      <Description> • 대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)</Description>
      <Description> • 경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)</Description>
      <BigTitle>11. 부칙</BigTitle>
      <Description>
        이 개인정보처리방침은 2019년 4월 1일부터 적용되며, 법령, 정책 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및
        수정이 있을 시에는 변경사항의 시행일의 7일 전부터 피치플래너 사이트의 알림판을 통하여 고지할 것입니다.
      </Description>
      <Description> • 개인정보 취급방침 버전번호 : 1.3 (2021년 6월 14일 시행)</Description>
      <Description> • 개인정보 취급방침 버전번호 : 1.2 (2019년 4월 1일 시행)</Description>
      <Description> • 개인정보 취급방침 버전번호 : 1.1 (2013년 2월 18일 시행)</Description>
    </SignupDetailTemplate>
  );
};
