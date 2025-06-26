import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { safeJsonResponse } from "@/lib/safeJsonResponse";
import { HttpStatusCode } from "@/lib/enum";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  const { email, first_name, password, role, last_name } = body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: HttpStatusCode.BAD_REQUEST });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      first_name,
      last_name,
      password: hashedPassword,
      is_verified: false,
      role,
    },
    select: {
      id: true,
      email: true,
    },
  });

  return safeJsonResponse({ message: "User created", user });
}
