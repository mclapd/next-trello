import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { Toaster } from "sonner";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConvexClientProvider>
      <EdgeStoreProvider>
        <QueryProvider>
          <Toaster />
          <ModalProvider />
          {children}
        </QueryProvider>
      </EdgeStoreProvider>
    </ConvexClientProvider>
  );
};

export default PlatformLayout;
