import axios from 'axios';

export const upload = async (file: any) => {
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await axios.post(`s3/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
};
