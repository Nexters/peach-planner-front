import axios from 'axios';
// ###
// GET https://api.peachplanner.com/api/user/verify/validate?token=0565613a-b0df-44c0-9fd5-13b3d32f929d

// ###
// POST https://api.peachplanner.com/api/user/verify/resetpw
// Content-Type: application/json

// {
//   "token": "11591b10-b196-4dd7-8bb2-30642afbefc8",
//   "password": "11111"
// }

interface ResetPwReq {
    token: string;
    password: string;
}

export const sendResetEmail = async (email: string) => {
    await axios.post<boolean>(`/user/verify/email`, null, {
        params: {
            email
        },
    });
}

export const validateToken = async (token: string) => {
    const { data } = await axios.get<boolean>(`/user/verify/validate`, {
        params: {
            token
        },
    });
    return data;
};

export const resetPw = async (reqBody: ResetPwReq) => {
    const { data } = await axios.post<boolean>(`/user/verify/resetpw`, reqBody);
    return data;
}