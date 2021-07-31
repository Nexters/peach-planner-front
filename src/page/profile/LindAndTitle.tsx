import HorizontalLine from '../../component/HorizontalLine';
import { Content, Title } from '../../component/style/style';

interface Props {
  title: string;
  content?: string;
}

const LineAndTitle = ({ title, content }: Props) => {
  return (
    <>
      <HorizontalLine color="#dee2e6"></HorizontalLine>
      <Title height={'27px'} width={'430px'} fontSize={'18px'} lineHeight={'27px'} margin={'12px 0 0 0'}>
        {title}
      </Title>
      {content ? (
        <Content
          height={'19px'}
          width={'auto'}
          color={'#495057'}
          fontSize={'13px'}
          lineHeight={'19px'}
          margin={'4px 0 20px 0'}
        >
          {content}
        </Content>
      ) : (
        <></>
      )}
    </>
  );
};

export default LineAndTitle;
