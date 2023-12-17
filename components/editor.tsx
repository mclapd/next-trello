"use client";

// import { useTheme } from "next-themes";
import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import {
  BlockNoteView,
  DefaultSideMenu,
  DragHandleMenu,
  DragHandleMenuItem,
  FormattingToolbarPositioner,
  HyperlinkToolbarPositioner,
  RemoveBlockButton,
  BlockColorsButton,
  SideMenuPositioner,
  SlashMenuPositioner,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";

import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  // const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
    uploadFile: handleUpload,
  });

  const CustomDragHandleMenu = (props: {
    editor: BlockNoteEditor;
    block: Block;
  }) => {
    return (
      <DragHandleMenu>
        <RemoveBlockButton {...props}>Delete</RemoveBlockButton>
        <BlockColorsButton {...props}>Colors</BlockColorsButton>
        {/* <DragHandleMenuItem onClick={() => window.alert("Button Pressed!")}>
          Open Alert
        </DragHandleMenuItem> */}
      </DragHandleMenu>
    );
  };

  return (
    <div>
      <BlockNoteView editor={editor} theme={"light"}>
        <FormattingToolbarPositioner editor={editor} />
        <HyperlinkToolbarPositioner editor={editor} />
        <SlashMenuPositioner editor={editor} />
        <SideMenuPositioner
          editor={editor}
          sideMenu={(props) => (
            <DefaultSideMenu {...props} dragHandleMenu={CustomDragHandleMenu} />
          )}
        />
      </BlockNoteView>
    </div>
  );
};

export default Editor;
