import bcryptjs from 'bcryptjs';
import { prisma } from './db';
import { User } from '@/types';

const BCRYPT_ROUNDS = 10;

export async function hashPin(pin: string): Promise<string> {
  return bcryptjs.hash(pin, BCRYPT_ROUNDS);
}

export async function verifyPin(pin: string, hash: string): Promise<boolean> {
  return bcryptjs.compare(pin, hash);
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { email },
  });
}

export async function getUserByUsername(username: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { username },
  });
}

export async function getUserByShortId(shortId: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { shortId },
  });
}

export async function getUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function createUser(
  email: string,
  username: string,
  shortId: string,
  pinHash: string
): Promise<User> {
  return prisma.user.create({
    data: {
      email,
      username,
      shortId,
      pinHash,
    },
  });
}
