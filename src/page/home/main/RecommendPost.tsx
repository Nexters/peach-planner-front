import { useQuery } from 'react-query';
import { fetchRecommendedPost } from 'src/api/Post';
import styled from 'styled-components';
import { FlexDiv } from '../../../component/style/style';
import snap1 from './dummy/snap1.png';
import snap2 from './dummy/snap2.png';
import snap3 from './dummy/snap3.png';
import snap4 from './dummy/snap4.png';
import SmallRecommendPost from './SmallRecommendPost';

const RecommendPost = () => {
  const { data: posts } = useQuery(['recommendedPost'], fetchRecommendedPost);

  return (
    <FlexDiv margin={'40px 0 0 0'} direction="column">
      <FlexDiv height={'56px'} justify="between" margin={'0 0 8px 0'}>
        <Title>추천 포스트</Title>
      </FlexDiv>
      <FlexDiv margin={'0 0 0px 0'} justify="flex-start" align="start">
        <PostBox onClick={(e) => (window.location.href = posts ? posts[0].blogUrl : '')}>
          <Image src={snap1}></Image>
          <PostTitle>{posts ? posts[0].title : ''}</PostTitle>
          <PostContent>{posts ? posts[0].description : ''}</PostContent>
        </PostBox>
        <FlexDiv margin={'0'} width={'414px'} justify="start" align="start" direction="column">
          {posts ? (
            posts
              .filter((_, index) => {
                if (index === 0) return false;
                return true;
              })
              .map((post, index) => {
                return (
                  <SmallRecommendPost
                    key={index}
                    title={post.title}
                    content={post.description}
                    img={post.imageUrl}
                    tag={post.hastTag.split(',')}
                    blogUrl={post.blogUrl}
                  ></SmallRecommendPost>
                );
              })
          ) : (
            <></>
          )}
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  );
};

export default RecommendPost;

const PostBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;

  cursor: pointer;
`;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 385px;
  width: 646px;
  margin: 0;
  border-radius: 10px;
`;

const Title = styled.div`
  height: 29px;
  width: auto;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 29px;
`;

const PostTitle = styled.div`
  height: 41px;
  width: auto;
  color: #000000;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 41px;
  margin: 14px 0 11px 0;
`;

const PostContent = styled.span`
  height: 20px;
  width: 646px;
  color: #495057;
  font-size: 14px;
  line-height: 20px;
`;
