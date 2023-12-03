"use client";

import { Card } from "@prisma/client";
import { Draggable } from "@hello-pangea/dnd";
import { useCardModal } from "@/hooks/use-card-modal";
import { Check } from "lucide-react";

interface CardItemProps {
  data: Card;
  index: number;
}

export const CardItem = ({ data, index }: CardItemProps) => {
  const cardModal = useCardModal();

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          onClick={() => cardModal.onOpen(data.id)}
          className={`truncate border-2 border-transparent  py-2 px-3 text-sm  rounded-md shadow-sm ${
            data.completed
              ? "flex bg-black/60 text-white/70 line-through hover:border-white"
              : "font-medium bg-white hover:border-black"
          }`}
        >
          {data.title}
          {data.completed && <Check className="w-4 h-4 ml-4" />}
        </div>
      )}
    </Draggable>
  );
};
