export class CustomResponse<Type> {
  isError: boolean;
  message: string;
  data: Type;
}
