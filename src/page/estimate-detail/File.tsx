import { Title } from 'src/component/style/style';
import styled from 'styled-components';
import FileImage from './FileImage';

interface Props {
  filePaths: string[];
}

const File = ({ filePaths }: Props) => {
  return (
    <Container>
      <Title height="24px" width="auto" fontSize="16px" color="#000" lineHeight="normal" margin="8px 0px 24px 0px">
        첨부파일
      </Title>
      <Images>
        {filePaths ? (
          filePaths.map((filePath, index) => {
            return <FileImage key={index} imageUrl={filePath}></FileImage>;
          })
        ) : (
          <></>
        )}
      </Images>
    </Container>
  );
};

export default File;

const Container = styled.div`
  width: 860px;
  border-bottom: 1px solid;
  border-bottom-color: #e9ecef;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
`;
