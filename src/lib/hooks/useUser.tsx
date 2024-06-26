import { getUserByUsername, internalUpdateUserByUsername } from "@/db/users";
import { User } from "@prisma/client";
import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { extractUsername } from "../utils";

export const useUser = () => {
  const [user, setUser] = useLocalStorage<User | null>("authUser", null);
  const [userLoading, setLoading] = useState(true);
  const { user: privyUser } = usePrivy();

  useEffect(() => {
    if (user) setLoading(false);

    if (privyUser?.email?.address && user === null) {
      getUserByUsername(extractUsername(privyUser.email.address)).then(
        (user) => {
          setUser(user);
          setLoading(false);
        }
      );
    }
  }, [privyUser, setUser, user]);

  const updateUser = (data: Partial<User>) => {
    setLoading(true);
    try {
      if (user) {
        internalUpdateUserByUsername(user.username, data).then((user) => {
          setUser(user);
        });
      }
    } catch {
      console.error("Failed to update user");
    }
    setLoading(false);
  };

  return { user, updateUser, userLoading };
};
