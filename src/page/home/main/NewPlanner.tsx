import styled from 'styled-components';
import Slick, { Settings } from 'react-slick';
import { FlexDiv } from '../../../component/style/style';
import PlannerCard from '../../../component/PlannerCard';
import LeftArrow from '../../../assets/svg/ic_arrow_left.svg';
import RightArrow from '../../../assets/svg/ic_arrow_right.svg';

import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { fetchPlanners } from '../../../api/Planner';
import { Link, useHistory } from 'react-router-dom';
import { pick } from 'src/api/Pick';
import { queryClient } from 'src/App';

const NewPlanner = () => {
  const history = useHistory();
  const { data: planners } = useQuery(['newPlanners', { isNew: true }], fetchPlanners);
  const [slider, setSlider] = useState<Slick>();
  const [slickSettings, setSlickSettings] = useState<Settings>({
    draggable: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    variableWidth: true,
    arrows: false
  });
  const { mutate, isLoading } = useMutation(pick, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['newPlanners']);
    },
    onError: (error: any) => {
      if (error.response.status === 401) {
        history.push('/login');
      }
    }
  });

  return (
    <FlexDiv margin={'40px 0 0 0'} direction="column">
      <FlexDiv height={'56px'} justify="space-between" margin={'0 0 8px 0'}>
        <Title>신규 플래너</Title>
        <FlexDiv justify="flex-end">
          <More>
            <StyledLink to="/search?sort=new">더 보기</StyledLink>
          </More>
          {planners?.totalElements! > 4 ? (
            <>
              <ArrowButton src={LeftArrow} onClick={slider?.slickPrev} margin="0 8px 0 0"></ArrowButton>
              <ArrowButton src={RightArrow} onClick={slider?.slickNext} margin="0"></ArrowButton>
            </>
          ) : (
            <></>
          )}
        </FlexDiv>
      </FlexDiv>
      <FlexDiv
        justify="flex-start"
        align="start"
        direction="row"
        margin="0"
        width="1100px"
        style={{ overflow: 'hidden' }}
      >
        <Slider {...slickSettings} ref={(ref) => setSlider(ref!)}>
          {planners ? (
            planners.content.map((planner) => {
              return (
                <PlannerCard
                  key={planner.id}
                  margin={'0 28px 0 0'}
                  size={'254px'}
                  imagePath={planner.images[0]}
                  heartCount={planner.likes}
                  reviewCount={planner.reviews}
                  name={planner.name}
                  organization={planner.company?.name}
                  region={planner.locations.join(',')}
                  id={planner.id}
                  blogLink={planner.externalLinks?.blogLink}
                  instagramLink={planner.externalLinks?.instagramLink}
                  facebookLink={planner.externalLinks?.facebookLink}
                  postLiked={planner.postLiked}
                  mutate={mutate}
                />
              );
            })
          ) : (
            <></>
          )}
        </Slider>
      </FlexDiv>
    </FlexDiv>
  );
};

export default NewPlanner;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #495057;
  font-size: 13px;
  line-height: 19px;
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

interface DivisionBoxProps {
  marginBottom: number;
}

export const DivisionBox = styled.span<DivisionBoxProps>`
  height: 56px;
  width: 1100px;
  margin-bottom: ${(props: DivisionBoxProps) => props.marginBottom};
  display: flex;
  justify-content: between;
  align-items: center;
`;

const Title = styled.div`
  width: 200px;
  letter-spacing: 0;
  color: #000000;
  display: flex;
  font-size: 20px;
  font-weight: bold;
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

const More = styled.div`
  height: 19px;
  font-size: 13px;
  line-height: 19px;
  margin: 0 16px 0 0;
  border-bottom: 1px solid;
  cursor: pointer;
`;
