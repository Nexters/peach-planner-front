interface IStringObject {
  [key: string]: string;
}

const colors: IStringObject = {
  lightGray: '#868E96',
  gray: '#495057',
  darkGray: '#212529',
  darkGray2: '#343A40',
  black: '#000000',
  pink: '#e64980',
  white: '#ffffff'
};

const theme = {
  colors
};

export default theme;
