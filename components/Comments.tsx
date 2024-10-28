import { Composer } from "@liveblocks/react-ui";
import { useThreads } from "@liveblocks/react/suspense";
import React from "react";

const Comments = () => {
  const { threads } = useThreads();
  return (
    <div className="comments-composer">
      <Composer className="comment-composer" />
      {threads.map((thread) => (
        <ThreadWrapper key={thread.id} thread={threads} />
      ))}
    </div>
  );
};

export default Comments;
