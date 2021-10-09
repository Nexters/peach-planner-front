import styled from 'styled-components';
import SearchIconSvg from '../../assets/svg/ic_search.svg';

interface Props {
  height: string;
  width: string;
  placeholder?: string;
  handleInput: (e: any) => void;
}

const SearchInput = ({ height, width, placeholder, handleInput }: Props) => {
  return (
    <SearchBox>
      <Input height={height} width={width} placeholder={placeholder} onChange={handleInput}></Input>
      <SearchIcon src={SearchIconSvg} />
    </SearchBox>
  );
};

export default SearchInput;

const SearchBox = styled.div`
  position: relative;
`;

interface ImageProps {
  src: string;
}

const SearchIcon = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 20px;
  width: 20px;
  position: absolute;
  right: 0;
  margin-right: 10px;
  margin-top: 10px;
`;

interface InputProps {
  height: string;
  width: string;
}

const Input = styled.input<InputProps>`
  box-sizing: border-box;
  height: ${(props: InputProps) => props.height};
  width: ${(props: InputProps) => props.width};
  border: 1px solid #ced4da;
  padding: 13px;
  border-radius: 3px;
  position: relative;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ADB5BD;
    font-size: 13px;
  }
`;
