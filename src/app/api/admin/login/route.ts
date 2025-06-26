import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || '';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return NextResponse.json({ message: 'User not found.' }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, admin.password);

    if (!isValid) {
      return NextResponse.json({ message: 'Password not matched.' }, { status: 401 });
    }

    const { password: _, ...adminWithoutPassword } = admin;

    const safeAdmin = {
      ...adminWithoutPassword,
      id: admin.id.toString(),
    };

    const token = jwt.sign({ id: safeAdmin.id, email: safeAdmin.email }, JWT_SECRET);

    return NextResponse.json(
      {
        message: 'Login successful',
        admin: safeAdmin,
        token,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
