import { Info } from "../_components/info";
import { Separator } from "@/components/ui/separator";
import { checkSubscription } from "@/lib/subscription";
import { Suspense } from "react";
import { NoteBoardList } from "../../[organizationId]/_components/note-board-list";

const NotesPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full mb-20">
      <Info isPro={isPro} />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<NoteBoardList.Skeleton />}>
          <NoteBoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default NotesPage;
