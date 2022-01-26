export interface UserLogin { 
    userName: string; 
    password: string; 
    loginType: 'BASIC'; 
}

export interface UserSignup {
    name?: string;
    nickName?: string;
    userName: string;
    password: string;
    type?: 'USER' | 'PLANNER';
    loginType?: 'BASIC' | 'KAKAO' | 'FACEBOOK';
    tel?: string;
    genderType?: string;
    email?: string;
}