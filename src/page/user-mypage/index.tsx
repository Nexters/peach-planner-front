import { useState } from 'react';
import { useQuery } from 'react-query';
import Slick, { Settings } from 'react-slick';
import { fetchPicks } from 'src/api/Pick';
import PlannerMiniCard from 'src/component/PlannerMiniCard';
import { FlexDiv, Title } from 'src/component/style/style';
import styled from 'styled-components';
import UserPageSideMenu from '../user/mypage/UserPageSideMenu';
import LeftArrow from 'src/assets/svg/ic_arrow_left.svg';
import RightArrow from 'src/assets/svg/ic_arrow_right.svg';
import { fetchEstimateList } from 'src/api/Estimate';
import MyEstimate from './Estimate';
import { EmptyText } from '../../../lib/pages/planner-detail/components/styles';

export const UserMyPage = () => {
  const { data: picks } = useQuery(['picks'], fetchPicks);
  const { data: estimates } = useQuery(['estimate'], fetchEstimateList);
  const [slider, setSlider] = useState<Slick>();
  const [slickSettings, setSlickSettings] = useState<Settings>({
    draggable: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    infinite: false,
    variableWidth: true,
    arrows: false
  });

  return (
    <Container>
      <InnerContainer>
        <UserPageSideMenu />
        <ContentContainer>
          <PickTitleBox>
            <Title height="27px" fontSize="18px" width="100px" lineHeight="normal" color="#000000">
              찜 목록
            </Title>
            <FlexDiv justify="flex-end">
              {picks?.pickLists?.length! > 6 ? (
                <>
                  <ArrowButton src={LeftArrow} onClick={slider?.slickPrev} margin="0 8px 0 0"></ArrowButton>
                  <ArrowButton src={RightArrow} onClick={slider?.slickNext} margin="0"></ArrowButton>
                </>
              ) : (
                <></>
              )}
            </FlexDiv>
          </PickTitleBox>
          <PickListBox style={{ overflow: 'hidden' }}>
            {(() => {
              if (picks?.pickLists?.length == 0) {
                return (
                  <EmptyText flex={10} textAlign='center'>찜한 목록이 없습니다.</EmptyText>
                )
              }

              if (picks !== undefined && picks.pickLists.length <= 6) {
                return picks.pickLists.map((pick) => {
                  return (
                    <PlannerMiniCard
                      key={pick.id}
                      id={pick.id}
                      plannerId={pick.plannerId}
                      size="130px"
                      image={pick.imageUrlPath}
                      plannerName={pick.name}
                      companyName={pick.subName}
                      margin={'0 16px 0 0'}
                    />
                  );
                });
              }
              return (
                <Slider {...slickSettings} ref={(ref) => setSlider(ref!)}>
                  {picks ? (
                    picks?.pickLists.map((pick) => {
                      return (
                        <PlannerMiniCard
                          key={pick.id}
                          id={pick.id}
                          plannerId={pick.plannerId}
                          size="130px"
                          image={pick.imageUrlPath}
                          plannerName={pick.name}
                          companyName={pick.subName}
                          margin={'0 16px 0 0'}
                        />
                      );
                    })
                  ) : (
                    <></>
                  )}
                </Slider>
              );
            })()}
          </PickListBox>
          <MyEstimateTitle>
            <Title height="27px" fontSize="18px" width="auto" lineHeight="normal" color="#000000">
              나의 견적서
            </Title>
          </MyEstimateTitle>
          <TableHeader>
            <EstimateCreatedAt>
              <Title height="18px" fontSize="12px" width="auto" lineHeight="normal" color="#212529">
                요청일
              </Title>
            </EstimateCreatedAt>
            <EstimateContent>
              <Title height="18px" fontSize="12px" width="auto" lineHeight="normal" color="#212529">
                요청 내역
              </Title>
            </EstimateContent>
            <EstimateNumber>
              <Title height="18px" fontSize="12px" width="auto" lineHeight="normal" color="#212529">
                No
              </Title>
            </EstimateNumber>
            <Company>
              <Title height="18px" fontSize="12px" width="auto" lineHeight="normal" color="#212529">
                플래너
              </Title>
            </Company>
            <EstimateState>
              <Title height="18px" fontSize="12px" width="auto" lineHeight="normal" color="#212529">
                상태
              </Title>
            </EstimateState>
          </TableHeader>
          {estimates && estimates.length > 0 ? (
            estimates.map((estimate, index) => {
              return (
                <MyEstimate
                  id={estimate.id}
                  createdAt={estimate.createDate}
                  content={estimate.description}
                  estimateNumber={estimate.id}
                  plannerName={estimate.plannerName}
                  status={estimate.status}
                />
              );
            })
          ) : (
            <EmptyText flex={1} textAlign='center' padding='30px 0 0 0'>견적서 내용이 없습니다.</EmptyText>
          )}
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const PickTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 860px;
  height: 56px;
`;

const PickListBox = styled.div`
  display: flex;
  align-items: center;
  width: 860px;
  height: 219px;
  border-top: 1px solid;
  border-top-color: #ced4da;
`;

const Slider = styled(Slick)`
  .slick-initialized slick-slider {
    overflow: hidden;
    flex: 1;
    max-width: 1100px !important;
  }

  .slick-track {
    display: flex;
    width: 1100px;
    overflow: hidden;
  }
  .slick-list {
    display: flex;
    width: 100%;
    overflow: hidden;
  }
`;

interface ImageProps {
  src: string;
  margin: string;
}

const ArrowButton = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  margin: ${(props: ImageProps) => props.margin};
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

const MyEstimateTitle = styled.div`
  display: flex;
  align-items: center;
  width: 860px;
  height: 56px;
`;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 860px;
  height: 34px;
  margin-top: 1px;
  border-top: 1px solid;
  border-top-color: #ced4da;
  border-bottom: 1px solid;
  border-bottom-color: #ced4da;
`;

const EstimateCreatedAt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 102px;
`;

const EstimateContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 436px;
`;

const EstimateNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 102px;
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 147px;
`;

const EstimateState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 73px;
`;
