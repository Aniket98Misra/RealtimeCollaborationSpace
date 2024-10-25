"use server";

import { clerkClient } from "@clerk/nextjs/server";

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
  try {
    const { data } = await clerkClient.users.getUserList();
  } catch (error) {}
};
