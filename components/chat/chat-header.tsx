import { Hash } from "lucide-react";

interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
}

export const ChatHeader = () => {
  return (
    <div>
      <div>Chat Header</div>
    </div>
  );
};
