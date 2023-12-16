import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { Toaster } from "sonner";
import { EdgeStoreProvider } from "@/lib/edgestore";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <EdgeStoreProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </EdgeStoreProvider>
  );
};

export default PlatformLayout;
