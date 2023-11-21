import { redirectToSignIn } from "@clerk/nextjs";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

interface ServerIdPageProps {
  params: {
    serverId: string;
  };
}

const ServerIdPage = async ({ params }: ServerIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      Member: {
        some: {
          profileId: profile.id,
        },
      },
    },
    include: {
      Channel: {
        where: {
          name: "general",
        },
      },
    },
  });

  return <div>Server ID Page</div>;
};

export default ServerIdPage;
