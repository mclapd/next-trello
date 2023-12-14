import { Info } from "../_components/info";
import { Separator } from "@/components/ui/separator";
import { checkSubscription } from "@/lib/subscription";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const NotesPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full mb-20">
      <Info isPro={isPro} />
      <Separator className="my-4" />
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Button disabled={true}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Create a note
        </Button>
      </div>
    </div>
  );
};

export default NotesPage;
