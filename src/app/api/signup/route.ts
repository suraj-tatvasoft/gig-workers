import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  const { email, first_name, password, role = "user" } = body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      first_name,
      password: hashedPassword,
      is_verified: false,
      role,
    },
  });

  return NextResponse.json({ message: "User created", user: { id: user.id, email: user.email } });
}
