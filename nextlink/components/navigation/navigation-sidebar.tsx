import NavigationAction from "@/components/navigation/navigation-action";
import { Separator } from "@/components/ui/separator";

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
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
    </div>
  );
};

export default NavigationSidebar;
