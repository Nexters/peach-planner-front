import React from 'react';
import styled from 'styled-components';
import { SignupDetailTemplate } from './SignupDetailTemplate';

interface TermsOfUseTextType {
  title: String;
  detail: {
    title: String;
    detail: String[];
  }[];
}

const TermsOfUseText: TermsOfUseTextType[] = [
  {
    title: '제 1 장 : 총칙',
    detail: [
      {
        title: '제1조 (목적)',
        detail: [
          '이 약관은 피치플래너가 홈페이지(peachplanner.com)에서 제공하는 온라인 서비스(이하 "서비스"라 한다)의 이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.'
        ]
      },
      {
        title: '제2조(정의)',
        detail: [
          '이 약관에서 사용하는 용어의 정의는 다음 각 호와 같습니다.',
          '	1.	이용자 : 본 약관에 따라 피치플래너가 제공하는 서비스를 받는 자',
          '	2.	이용계약 : 서비스 이용과 관련하여 피치플래너와 이용자간에 체결하는 계약',
          '3.	가입 : 피치플래너가 제공하는 신청서 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용계약을 완료시키는 행위',
          '4.	회원 : 회원가입에 필요한 개인정보를 제공하여 사이트에 회원 등록을 한 자',
          '5.	이용자번호(ID) : 회원 식별과 회원의 서비스 이용을 위하여 이용자가 선정하고 피치플래너가 승인하는 영문자와 숫자의 조합 (개인식별정보당 하나의 ID만 발급 가능)',
          '6.	패스워드(PASSWORD) : 회원의 정보 보호를 위해 이용자 자신이 설정한 영문자와 숫자, 특수문자의 조합',
          '7.	회원탈퇴 : 피치플래너 또는 회원이 서비스 이용 이후 그 이용계약을 종료시키는 의사표시',
          '8.	게시물 : 게시판에 등록하는 제목, 내용 및 댓글'
        ]
      },
      {
        title: '제3조 (약관의 효력과 변경)',
        detail: [
          '① 약관은 공지 게시판 등 서비스 화면에 게시하거나 또는 기타의 방법으로 공지함으로써 효력이 발생됩니다.',
          '	② 피치플래너는 필요한 경우 법률 기타 관련 법령의 범위내에서 약관의 내용을 변경할 수 있으며, 개정약관 및 적용일자와 개정사유를 전항의 방법으로 공지합니다. 이용자는 변경된 약관의 공지 7일 이후에도 거부의사를 표시하지 아니하고 서비스를 계속 사용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.',
          '③ 회원은 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하고 본인의 회원등록을 취소할 수 있으며, 이의 없이 계속 사용하는 경우에는 약관 변경에 동의한 것으로 간주되고 전항과 같은 방법으로 효력이 발생합니다.'
        ]
      },
      {
        title: '제4조 (준용규정)',
        detail: [
          '이 약관에 명시되지 않은 사항은 정보통신망이용촉진 및 정보보호 등에 관한 법률, 전기통신기본법, 전기통신사업법 및 기타 관련법령의 규정에 따릅니다.'
        ]
      }
    ]
  },
  {
    title: '제2장 서비스 이용계약',
    detail: [
      {
        title: '제5조 (이용계약의 성립)',
        detail: [
          '이용계약은 “약관 내용에 동의함" 버튼을 클릭하는 등 피치플래너가 정한 일정한 절차에 따른 이용자의 이용신청에 대하여 피치플래너가 승낙을 하면 성립됩니다.'
        ]
      },
      {
        title: '제6조 (이용신청)',
        detail: [
          '① 이용신청은 서비스의 회원정보 화면에서 이용자가 피치플래너에서 요구하는 가입신청서 양식에 개인의 신상정보를 기록하여 신청합니다.',
          '② 가입신청서 양식 중 아래 각호에 해당하는 필수항목을 모두 기입하고 약관에 동의해야만 이용신청이 완료됩니다.',
          '1.	이용자번호(ID)',
          '2.	패스워드',
          '3.	생년월일',
          '4.	성별',
          '5.	성명',
          '6.	닉네임',
          '7.	e-mail 주소',
          '8.	기타 피치플래너가 필요하다고 인정하는 사항',
          '③ 실명인증이 불가능한 해외거주 외국인 등은 별도의 신청서 양식을 통해 이용신청할 수 있습니다.'
        ]
      },
      {
        title: '제7조 (이용신청의 승낙)',
        detail: [
          '① 피치플래너는 이용자가 신청서의 필수 항목을 정확히 기재하여 이용신청을 하였을 경우에 특별한 사정이 없는 한 서비스 이용신청을 승낙합니다.',
          '② 다음 각 호에 해당하는 경우에는 이용승낙을 하지 않을 수 있습니다.',
          '1.	본인의 정보가 아닌 다른 사람의 명의나 허위정보로 신청한 경우',
          '2.	사회의 안녕 질서 또는 미풍양속을 저해할 목적으로 신청한 경우',
          '3.	범죄행위, 스팸광고 등 부정한 목적으로 서비스를 이용하고자 하는 경우',
          '4.	법률, 약관 및 각 게시판의 이용규칙을 위반하여 이용자격이 제한된 이용자가 신청한 경우',
          '③ 피치플래너는 다음 사항에 해당하는 경우 승낙을 보류할 수 있습니다.',
          '1.	피치플래너의 설비나 기술상, 운영상의 이유로 서비스 승낙이 곤란한 경우',
          '2.	이용 신청자의 연령이 만 14세 이하로 개인정보제공에 대한 동의를 법정대리인으로부터 받지 않은 경우',
          '3.	최근 30일 이내에 이용계약을 해지한 이력이 있는 이용자가 신청한 경우',
          '④ 피치플래너는 이용계약 절차 완료 이후 본조 제2항 각 호에 따른 사유가 발견된 경우 즉시 이용승낙을 철회할 수 있습니다.'
        ]
      },
      {
        title: '제8조 (계약사항의 변경)',
        detail: [
          '① 회원은 이용신청시 기재한 사항이 변경 되었을 경우에는 즉시 변경사항을 정정하여야 하며, 수정하지 아니하여 발생하는 문제의 책임은 회원에게 있습니다.',
          '② ID, 생년월일 등 회원의 고유한 정보는 변경할 수 없습니다.',
          '③ 기재된 회원정보가 다음 각 호에 해당하는 경우 회원의 요청 또는 피치플래너의 직권으로 변경 또는 서비스의 이용을 제한하거나 정지할 수 있습니다.',
          '1.	피치플래너의 서비스 또는 운영자, 관리자 등의 명칭과 동일하거나 유사하여 오인의 우려가 있는 경우',
          '2.	타인에게 혐오감을 주거나 미풍양속에 어긋나는 경우',
          '3.	타인의 권리를 침해할 우려가 있는 경우',
          '4.	기타 합리적인 사유가 있는 경우'
        ]
      }
    ]
  },
  {
    title: '제3장 서비스의 이용',
    detail: [
      {
        title: '제9조 (서비스 이용)',
        detail: [
          '① 목적상 특수한 일부 게시판을 제외하고, 대부분의 게시판은 회원 가입을 하지 않아도 기본적으로 게시물을 열람하는데 별도의 제한을 두지 않습니다.',
          '② 회원 가입 후 일정 기간동안 게시물 및 댓글의 작성이 제한됩니다. 제한 기간은 운영 중 변경될 수 있습니다.',
          '1.	게시물 및 댓글 작성 제한기간 : 회원 가입 후 30일, 로그인 14회 이상 - 2020년 6월 17일 변경',
          '③ 서비스의 이용시간은 연중무휴, 24시간으로 함을 원칙으로 합니다. 단, 다음 각 호에 해당하는 경우 서비스 이용을 제한하거나 중지할 수 있습니다.',
          '1.	서비스 설비의 점검 및 유지보수 또는 공사로 인하여 부득이한 경우',
          '2.	국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 경우',
          '3.	국가 또는 관계기관의 명령으로 인해 일부 서비스를 제한해야 할 경우',
          '4.	기타 중대한 사유로 인해 서비스의 이용을 지속하는 것이 업무상 및 기술상 불가능할 경우 또는 운영상 서비스 제한이나 중지가 불가피하다고 회사가 판단되는 경우',
          '④ 피치플래너는 전항의 규정에 의해 서비스의 이용을 제한하거나 중지할 경우 그 사유 및 기간을 사전에 공지함을 원칙으로 합니다. 단, 사전에 예상하지 못했거나 회사가 통제할 수 없는 상황이 발생할 경우 그러하지 아니합니다.',
          '⑤ 피치플래너는 서비스의 목적이나 용도에 따라 합리적인 범위 내에서 이용규칙을 정할 수 있으며, 회원은 해당 규칙을 준수하며 서비스를 이용하여야 합니다.',
          '⑥ 피치플래너는 회원의 가입일, 연령, 활동이력, 이용제한 요청 등에 따라 일부의 서비스를 제한할 수 있습니다. 이 경우 이용자가 알 수 있도록 그 기준과 제한 내용을 게시판 등에 공지합니다.'
        ]
      },
      {
        title: '제10조(서비스 이용의 제한 및 중지)',
        detail: [
          '① 피치플래너는 효율적인 서비스 운영을 위하여 회원의 메모리 공간, 메시지크기, 보관일수 등을 제한할 수 있습니다.',
          '② 피치플래너는 일정 기간동안 접속 이력이 없는 계정에 대하여 관련 법령에 따라 휴면계정 전환 또는 파기할 수 있습니다.',
          '③ 피치플래너는 회원이 서비스 내에 게시하거나 전달하는 모든 내용물이 다음 각 호에 해당한다고 판단될 경우 사전 통보 없이 게시중단, 이동, 삭제 등의 조치를 취할 수 있으며 필요한 경우 해당 회원의 서비스 이용자격을 일정 기간 제한하거나 영구 중지할 수 있습니다.',
          '1.	회원 또는 제3자에 대한 인신공격, 비하, 비방, 욕설, 중상모략, 허위사실 유포, 명예훼손 등의 내용이 포함된 경우',
          '2.	타인을 고의적으로 기만하거나 부정하게 영리적, 업무적 기타 개인적인 이익을 얻을 목적임이 확인되는 경우',
          '3.	자신의 종교적 신념을 강요하거나 타인의 종교를 비하한 경우',
          '4.	공공질서 및 미풍양속에 위반되는 내용인 경우',
          '5.	범죄적 행위에 결부된다고 인정되는 내용인 경우',
          '6.	회원 또는 제3자의 저작권이나 초상권 등 기타 권리를 침해하는 내용인 경우',
          '7.	정보통신설비의 오작동이나 정보 등의 파괴를 유발시키는 컴퓨터바이러스 프로그램 등을 유포하는 경우',
          '8.	스토킹, 불필요한 특수문자 과다사용, 반복적인 게시물 붙여넣기 등 다른 이용자의 이용을 방해하는 경우',
          '9.	특정 집단에 대한 차별적 내용으로서 해당 집단이나 그 구성원들에게 굴욕감이나 불이익을 현저하게 초래하는 경우',
          '10.	기타 관계법령에 위반되거나 피치플래너에서 정한 각 게시판의 목적에 따른 이용규칙에 어긋나는 경우',
          '④ 피치플래너는 회원의 공개된 게시물 등에 대하여 다른 이용자 혹은 제3자의 법률상 권리 침해를 근거로 게시중단 요청을 받은 경우 게시물을 삭제하거나 게시물 차단 등의 임시조치를 할 수 있으며 게시중단 요청자와 게시물 등록 회원간의 합의 또는 법적조치의 결과 등이 접수되면 이를 따릅니다.',
          '⑤ 피치플래너는 서비스 내에 공개된 게시물 등이 사생활 침해 또는 명예훼손 등 제3자의 권리를 침해한다고 인정하는 경우 전항의 게시중단 요청이 없어도 해당 게시물을 게시중단 할 수 있습니다.'
        ]
      },
      {
        title: '제11조 (권리의 귀속 및 저작물의 이용)',
        detail: [
          '① 서비스 내에서 게시된 게시물 등의 저작권은 해당 게시물의 저작자에게 귀속됩니다.',
          '② 다음 각 호에 해당하는 범위 내에서 피치플래너는 회원이 등록한 게시물을 이용할 수 있습니다.',
          '1.	서비스 내에서 게시물의 복제, 전송, 전시, 배포 및 이를 위해 게시물의 제목 및 내용을 변경하거나 수정 또는 이동할 수 있습니다.',
          '2.	각각의 게시판의 용도에 적합하지 않거나 이용 규칙에 위배되는 경우, 게시물을 수정하거나 게시판의 위치를 변경, 또는 삭제할 수 있습니다.',
          '3.	다른 회원의 신고 등에 의해 일정 시간 게시물의 내용이 차단될 수 있습니다.',
          '4.	회원이 스크랩 등의 기능을 사용하여 게시물의 제목 및 링크를 이용할 수 있습니다.',
          '5.	전체메일, 소식지 등의 배포를 위해 회원이 작성한 이미지, 제목, 내용의 일부를 전자메일로 배포할 수 있습니다.',
          '6.	검색 등 향상된 서비스를 위해 관련 제휴사에게 게시물의 제목 및 내용, 게시자의 ID, 닉네임 등 필요한 정보를 제공할 수 있습니다. 단 이 경우 제공된 정보는 지정된 목적 이외에는 사용되지 않으며, 성명, 이메일 등 회원의 개인정보는 제공되지 않습니다.',
          '③ 피치플래너는 제2항 이외의 방법으로 회원의 게시물을 이용하고자 하는 경우 쪽지, 이메일, 약관의 재동의 등을 통해 회원의 동의를 얻습니다.',
          '④ 회원의 탈퇴 및 회원자격을 상실한 경우 해당 ID에 기록된 스크랩, 쪽지, 주소록 등은 탈퇴 후 30일 이내에 자동 삭제됩니다. 단, 공개된 게시판에 게시된 게시물, 재게시되거나 복제된 게시물과 타인의 게시물과 결합되어 제공되는 게시물은 자동 삭제되지 않으므로 탈퇴 전 본인이 직접 삭제하여야 합니다.'
        ]
      }
    ]
  },
  {
    title: '제4장 계약당사자의 책임과 의무',
    detail: [
      {
        title: '제12조(피치플래너의 의무)',
        detail: [
          '① 피치플래너는 관련 법령과 이 약관이 정하는 사항을 준수하며, 지속적이고 안정적인 서비스를 위해 최선을 다합니다.',
          '② 피치플래너는 회원의 회원정보를 보호하며, 개인정보 보호정책을 공시하고 준수합니다.',
          '③ 피치플래너는 서비스 제공과 관련해서 알고 있는 회원의 신상 정보를 본인의 승낙 없이 제3자에게 누설하거나 배포하지 않습니다. 단, 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있거나 또는 기타 관계법령에서 정한 절차에 의한 요청이 있을 경우에는 그러하지 아니합니다.',
          '④ 피치플래너는 회원 수신 동의를 하지 않은 영리목적의 광고성 전자우편, SMS 문자서비스 등을 발송하지 아니합니다.'
        ]
      },
      {
        title: '제13조(회원 및 이용자의 책임)',
        detail: [
          '① 회원은 자신의 로그인 패스워드 등 개인정보에 대한 관리책임을 가집니다.',
          '② 회원이 작성한 게시물 등에 대한 모든 권리와 책임은 이를 작성한 회원에게 있습니다.',
          '③ 서비스를 통해 얻은 정보를 그 정보 권리자의 동의없이 수집, 복제, 배포할 수 없습니다.',
          '④ 서비스를 이용하여 해킹, 불법자료의 배포 및 기타 불법행위를 하여서는 아니되며, 이를 위반하여 발생한 영업활동의 결과 및 손실, 관계기관에 의한 법적조치 등에 관하여서는 그 이용자가 책임을 집니다.',
          '⑤ 회원은 피치플래너가 정한 약관 및 이용규칙을 숙지하고 준수하여야 합니다.'
        ]
      }
    ]
  },
  {
    title: '제5장 계약해지 및 이용제한',
    detail: [
      {
        title: '제14조(계약해지 및 이용제한)',
        detail: [
          '① 회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 인터넷을 통하여 해지신청을 하여야 합니다. 단, 유관기관의 요청이 있는 경우 본인이 직접 탈퇴하지 않아도 이용계약 해지가 가능할 수 있습니다.',
          '② 회원정보는 회원 탈퇴 30일 후 자동 삭제되며, 이 기간동안 재가입이 제한됩니다.',
          '③ 회원 탈퇴 시 해당 아이디와 연계된 쪽지, 스크랩내용 등은 삭제되나, 공개된 게시판에 작성한 게시물 등은 삭제되지 않으며 삭제를 원할 경우 본인이 직접 삭제 후 탈퇴하여야 합니다.',
          '④ 사이트 이용규칙 또는 약관 등을 위반하여 징계 중인 상태에서 탈퇴할 경우 재가입할 수 없으며, 만일 재가입 후 징계사실이 확인되면 이용이 제한되거나 이전 회원조치이력을 승계할 수 있습니다.'
        ]
      }
    ]
  },
  {
    title: '제6장 기 타',
    detail: [
      {
        title: '제15조(양도금지)',
        detail: [
          '회원은 서비스의 이용권한, 기타 이용계약상의 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.'
        ]
      },
      {
        title: '제16조(손해배상)',
        detail: [
          '피치플래너는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 동 손해가 피치플래너의 고의 또는 중대한 과실로 인한 경우를 제외하고 이에 대하여 책임을 부담하지 아니합니다.'
        ]
      },
      {
        title: '제17조(면책 조항)',
        detail: [
          '① 피치플래너는 천재지변, 전쟁 또는 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.',
          '② 피치플래너는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 발생한 손해에 대한 책임이 면제됩니다.',
          '③ 피치플래너는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.',
          '④ 피치플래너는 회원이 서비스를 이용하여 기대하는 이익이나 서비스를 통하여 얻는 자료로 인한 손해에 관하여 책임을 지지 않습니다.',
          '⑤ 피치플래너는 회원이 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.'
        ]
      },
      {
        title: '제18조(관할법원)',
        detail: [
          '서비스 이용으로 발생한 분쟁에 대해 소송이 제기 될 경우 당 회사의 소재지를 관할하는 법원을 전속 관할법원으로 합니다.'
        ]
      }
    ]
  }
];

export const TermsOfUse = () => {
  return (
    <SignupDetailTemplate title="이용약관">
      {TermsOfUseText.map((item) => (
        <>
          <BigTitle>{item.title}</BigTitle>
          {item.detail.map((detailList) => (
            <>
              <SmallTitle>{detailList.title}</SmallTitle>
              {detailList.detail.map((text) => (
                <Description>{text}</Description>
              ))}
            </>
          ))}
        </>
      ))}
      <BigTitle>부 칙</BigTitle>
      <Description>(시행일) 이 약관은 2021년 12월 1일부터 시행합니다.</Description>
    </SignupDetailTemplate>
  );
};

const BigTitle = styled.div`
  font-size: 18px;
  margin-top: 40px;
`;

const SmallTitle = styled.div`
  font-size: 15px;
  margin: 30px 0 10px 0;
`;

const Description = styled.div`
  font-size: 12px;
  line-height: 20px;
`;