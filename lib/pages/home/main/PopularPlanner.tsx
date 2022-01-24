import { FlexDiv } from 'lib/pages/components/style/style';
import PlannerCard from 'lib/pages/components/PlannerCard';
import LeftArrow from 'public/assets/svg/ic_arrow_left.svg';
import RightArrow from 'public/assets/svg/ic_arrow_right.svg';
import styled from 'styled-components';
import Slick, { Settings } from 'react-slick';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { fetchPopularPlanners } from 'lib/api/Planner';
import { pick } from 'lib/api/Pick';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { queryClient } from 'pages/_app';
import Image from 'next/image';

const PopularPlanner = () => {
  const history = useRouter();
  const { data: planners } = useQuery(['popularPlanners'], fetchPopularPlanners);
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
      queryClient.invalidateQueries(['popularPlanners']);
    },
    onError: (error: any) => {
      if (error.response.status === 401) {
        history.push('/login');
      }
    }
  });

  return (
    <FlexDiv margin={'64px 0 0 0'} direction="column">
      <FlexDiv height={'56px'} justify="between" margin={'0 0 8px 0'}>
        <Title>인기 플래너</Title>
        <FlexDiv justify="flex-end">
          <More>
            <Link prefetch passHref href="/search?sort=popular"><StyledLink>더 보기</StyledLink></Link>
          </More>
          <ArrowButton src={LeftArrow} onClick={slider?.slickPrev} margin="0 8px 0 0" />
          <ArrowButton src={RightArrow} onClick={slider?.slickNext} margin="0" />
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
                  blogLink={planner.externalLinks.blogLink}
                  instagramLink={planner.externalLinks.instagramLink}
                  facebookLink={planner.externalLinks.facebookLink}
                  postLiked={planner.postLiked}
                  mutate={mutate}
                ></PlannerCard>
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

export default PopularPlanner;

const StyledLink = styled.a`
  text-decoration: none;
  color: #495057;
  font-size: 13px;
  line-height: 19px;
`;

const Title = styled.div`
  width: 200px;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
`;

interface ImageProps {
  src: string;
  margin: string;
}

const ArrowButton = styled(Image).attrs((props: ImageProps) => ({ src: props.src }))`
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
