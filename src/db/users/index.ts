"use server";
import prisma from "@/db/prisma";
import { NavPath } from "@/lib/types";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getAllUsers() {
  console.log("fetching all users");
  const users = await prisma.user.findMany();

  return users;
}

export async function getUserByUsername(username: string) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      orgs: true,
      events: true,
    },
  });
  return user;
}

export async function getAllUsersWithOrgs() {
  return prisma.user.findMany({
    include: {
      orgs: true,
    },
  });
}

export async function createUser(username: string) {
  const user = await prisma.user.create({
    data: {
      firstName: "",
      lastName: "",
      major: "",
      username,
    },
  });

  return user;
}

export async function internalUpdateUserByUsername(
  username: string,
  data: Partial<User>
) {
  console.log("updating user by username");
  const user = await prisma.user.update({
    where: {
      username,
    },
    data,
    include: {
      orgs: true,
      events: true,
    }
  });

  revalidatePath(NavPath.LEADERBOARD);
  return user;
}
