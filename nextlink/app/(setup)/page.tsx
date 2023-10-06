import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";

const SetupPage = async () => {
  const profile = await initialProfile();

  console.log(profile)

  const server = await db.server.findFirst({
    where: {
      Member: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`)
  }

  return (
    <div>
      <div>
        <h1>SetupPage</h1>
      </div>
    </div>
  );
};

export default SetupPage;
