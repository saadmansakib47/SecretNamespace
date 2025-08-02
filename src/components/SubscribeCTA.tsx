import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SubscribeCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button className="rounded-full p-4 h-14 w-14 shadow-lg">
        <Mail className="h-6 w-6" />
      </Button>
    </div>
  );
}