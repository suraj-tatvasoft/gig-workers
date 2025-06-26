import { NextResponse } from "next/server";

export function safeJsonResponse(data: any, init?: ResponseInit) {
  return NextResponse.json(
    JSON.parse(
      JSON.stringify(data, (_key, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    ),
    init
  );
}