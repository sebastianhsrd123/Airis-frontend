export interface ResponseData {
  code: number;
  message: string;
  data?: any;
  error?: string;
  token?: string  | null;
}
