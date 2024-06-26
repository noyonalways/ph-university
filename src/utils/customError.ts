type TCustomError = {
  success?: boolean;
  status?: number;
  message: string;
};

export function customError(
  success: boolean = false,
  status: number = 500,
  message: string = "something went wrong",
) {
  const err: TCustomError = new Error(message);
  err.status = status;
  err.success = success;

  return err;
}
