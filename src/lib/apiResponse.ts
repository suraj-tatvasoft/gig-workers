// lib/apiResponse.ts
import { NextResponse } from 'next/server';

type ApiResponseParams<T> = {
  status: boolean;
  statusCode: number;
  message: string;
  data?: T;
  dataEncrypted?: string;
};

export const APIResponse = <T>({
  status,
  statusCode,
  message,
  data,
  dataEncrypted,
}: ApiResponseParams<T>) => {
  const body: any = {
    success: status,
    status: statusCode,
    message,
  };

  if (data) body.data = data;
  if (dataEncrypted) body.dataEncrypted = dataEncrypted;

  return NextResponse.json(body, { status: statusCode });
};