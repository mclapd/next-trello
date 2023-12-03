"use client";

import { FormInput } from "@/components/form/form-input";
import { Skeleton } from "@/components/ui/skeleton";
import { CardWithList } from "@/types";
import { Layout } from "lucide-react";
import { useState, useRef, ElementRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useAction } from "@/hooks/use-action";
import { updateCard } from "@/actions/update-card";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

interface HeaderProps {
  data: CardWithList;
}

export const Header = ({ data }: HeaderProps) => {
  const queryClient = useQueryClient();
  const params = useParams();
  const [completed, setCompleted] = useState(data.completed);
  let isCompletedChanged = false;

  const { execute } = useAction(updateCard, {
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["card", data.id],
      });

      queryClient.invalidateQueries({
        queryKey: ["card-logs", data.id],
      });

      if (isCompletedChanged) {
        toast.success(`Updated to "${data.title}"`);
      } else {
        toast.success(`Renamed to "${data.title}"`);
      }
      setTitle(data.title);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const inputRef = useRef<ElementRef<"input">>(null);

  const [title, setTitle] = useState(data.title);

  const onBlur = () => {
    inputRef.current?.form?.requestSubmit();
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const boardId = params.boardId as string;

    if (title === data.title) {
      return;
    }

    execute({
      title,
      boardId,
      id: data.id,
      completed,
    });
  };

  const handleCheckboxChange = () => {
    const boardId = params.boardId as string;
    setCompleted(!completed);
    isCompletedChanged = true;
    execute({
      title,
      boardId,
      id: data.id,
      completed: !completed,
    });
  };

  return (
    <div className="flex items-start gap-x-3 mb-6 w-full">
      <Layout className="h-5 w-5 mt-1 text-neutral-700" />
      <div className="w-full">
        <div className="flex">
          <div className="flex-grow">
            <form action={onSubmit}>
              <FormInput
                ref={inputRef}
                onBlur={onBlur}
                id="title"
                defaultValue={title}
                className={`flex-growfont-semibold text-xl px-1 text-neutral-700 bg-transparent border-transparent relative -left-1.5 w-[95%] focus-visible:bg-white focus-visible:border-input mb-0.5 truncate ${
                  completed ? " line-through" : ""
                }`}
              />
            </form>
          </div>
          <div className="flex-shrink mr-10">
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={completed}
                onCheckedChange={handleCheckboxChange}
                id="terms"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Completed
              </label>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          in list <span className="underline">{data.list.title}</span>
        </p>
      </div>
    </div>
  );
};

Header.Skeleton = function HeaderSkeleton() {
  return (
    <div className="flex items-start gap-x-3 mb-6">
      <Skeleton className="h-6 w-6 mt-1 bg-neutral-200" />
      <div>
        <Skeleton className="w-24 h-6 mb-1 bg-neutral-200" />
        <Skeleton className="w-12 h-4 bg-neutral-200" />
      </div>
    </div>
  );
};
