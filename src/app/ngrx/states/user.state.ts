import { UserInfor } from 'src/app/models/user-info';

export interface UserInforState {
  userInfor: UserInfor;
  error: any;
  isLoading: boolean;
  isSuccess: boolean;
  isLoadinngAdd: boolean;
  isSuccessAdd: boolean;
}
