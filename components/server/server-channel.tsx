"use client";

import { Hash } from "lucide-react";

import { Channel, ChannelType, MemberRole, Server } from "@prisma/client";

interface ServerChannelProps {
  channel: Channel;
  server: Server;
  role?: MemberRole;
}

const iconMap = {
  [ChannelType.TEXT]: Hash,
};

export const ServerChannel = ({
  channel,
  server,
  role,
}: ServerChannelProps) => {
  return (
    <div>
      <div>Server Channel</div>
    </div>
  );
};
