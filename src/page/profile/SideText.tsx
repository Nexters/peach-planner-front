import { Content } from '../../component/style/style';

interface Props {
  text: string;
  colorText: string;
}

const SideText = ({ text, colorText }: Props) => {
  return (
    <>
      <Content
        height={'18px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'12px'}
        lineHeight={'18px'}
        margin="0px 2px 0 0"
      >
        {text}
      </Content>
      <Content height={'18px'} width={'auto'} color={'#E64980'} fontSize={'12px'} lineHeight={'18px'}>
        {colorText}
      </Content>
    </>
  );
};

export default SideText;
