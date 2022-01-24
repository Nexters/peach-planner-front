import { useQuery } from 'react-query';
import { fetchRecommendedPost } from 'lib/api/Post';
import styled from 'styled-components';
import { FlexDiv } from 'lib/pages/components/style/style';
import SmallRecommendPost from './SmallRecommendPost';
import Image from 'next/image';

const RecommendPost = () => {
  const { data: posts } = useQuery(['recommendedPost'], fetchRecommendedPost);
  console.log(posts);

  return (
    <FlexDiv margin={ '40px 0 0 0' } direction="column">
      <FlexDiv height={ '56px' } justify="between" margin={ '0 0 8px 0' }>
        <Title>추천 포스트</Title>
      </FlexDiv>
      <FlexDiv margin={ '0 0 0px 0' } justify="flex-start" align="start">
        {
          posts && posts.length > 0 ?
            <PostBox onClick={ (e) => (window.location.href = posts ? posts[0].blogUrl : '') }>
              <Img src={ posts ? posts[0].imageUrl : '' } height='385px' width='646px'/>
              <PostTitle>{ posts ? posts[0].title : '' }</PostTitle>
              <PostContent>{ posts ? posts[0].description : '' }</PostContent>
            </PostBox> :
            <></>
        }
        <FlexDiv margin={ '0' } width={ '414px' } justify="start" align="start" direction="column">
          { posts ? (
            posts
              .filter((_, index) => {
                if (index === 0) return false;
                return true;
              })
              .map((post, index) => {
                return (
                  <SmallRecommendPost
                    key={ index }
                    title={ post.title }
                    content={ post.description }
                    img={ post.imageUrl }
                    tag={ post.hastTag.split(',') }
                    blogUrl={ post.blogUrl }
                  />
                );
              })
          ) : (
            <></>
          ) }
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

const Img = styled(Image).attrs((props: ImageProps) => ({ src: props.src }))`
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
