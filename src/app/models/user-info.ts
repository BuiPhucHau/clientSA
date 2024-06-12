export interface UserInfor {
  id: number;
  name: string;
  email: string;
  photoURL: string;
  role: string;
}


export interface WrappedUserInfor {
  data: UserInfor;
}

