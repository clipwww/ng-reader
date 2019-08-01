export enum ResultCode {
  success = '200',
  error = '500'
}

export interface ResultVM {
  success: boolean;
  resultCode: string;
  resultMessage: string;
}


export interface ResultGenericVM<T> extends ResultVM {
  item: T;
}

export interface ResultListGenericVM<T> extends ResultVM {
  items: T[];
  page?: {
    size: number;
    index: number;
    pageAmount: number;
    dataAmount: number;
  };
}
