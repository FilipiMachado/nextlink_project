import NavigationAction from "@/components/navigation/navigation-action";

import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

const NavigationSidebar = async () => {
  const profile = await currentProfile();

  //console.log(profile);

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      Member: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  console.log(servers);

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full py-3 dark:bg-[#1E1F22]">
      <NavigationAction />
    </div>
  );
};

export default NavigationSidebar;
