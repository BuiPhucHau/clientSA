import {StockModel, StockResponse} from 'src/app/models/stock.model';

export interface StockState {
  stockList: StockModel[];
  stockResponse: StockResponse;
  isLoading: boolean;
  isSuccess: boolean;
  error: any;
  isLoadingdel: boolean;
  isSuccessdel: boolean;
  isLoadinngAdd: boolean;
  isSuccessAdd: boolean;
  isUpSuccess: boolean;
  isUpLoading: boolean;
}
