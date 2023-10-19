import { redirect } from "next/navigation";
import { ChannelType } from "@prisma/client";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

interface ServerSidebarProps {
  serverId: string;
}

export const ServerSidebar = async ({ serverId }: ServerSidebarProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const server = await db.server.findUnique({
    where: {
      id: serverId,
    },
    include: {
      Channel: {
        orderBy: {
          createdAt: "asc",
        },
      },
      Member: {
        include: {
          profile: true,
        },
        orderBy: {
          role: "asc",
        },
      },
    },
  });

  const textChannels = server?.Channel.filter(
    (channel) => channel.type === ChannelType.TEXT
  );
  const audioChannels = server?.Channel.filter(
    (channel) => channel.type === ChannelType.AUDIO
  );
  const videohannels = server?.Channel.filter(
    (channel) => channel.type === ChannelType.VIDEO
  );
  const members = server?.Member.filter(
    (member) => member.profileId !== profile.id
  );

  if (!server) {
    return redirect("/");
  }

  const role = server.Member.find(
    (member) => member.profileId === profile.id
  )?.role;

  console.log(role);

  return <div>ServerSidebar</div>;
};
