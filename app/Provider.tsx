"use client";
import Loader from "@/components/Loader";
import { getClerkUsers } from "@/lib/actions/user.actions";
import {
  ClientSideSuspense,
  LiveblocksProvider,
} from "@liveblocks/react/suspense";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={async (userIds) => {
        const users = await getClerkUsers(userIds);
        return users;
      }}
    >
      {/* publicApiKey={"pk_dev_xRsNg…cEx5KP"} */}
      {/* <RoomProvider id="my-room"> */}
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
      {/* </RoomProvider> */}
    </LiveblocksProvider>
  );
};

export default Provider;
