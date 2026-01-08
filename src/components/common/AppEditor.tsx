import { useCreateBlockNote } from "@blocknote/react";
// Or, you can use ariakit, shadcn, etc.
import { BlockNoteView } from "@blocknote/mantine";
import { ko } from "@blocknote/core/locales";
// Default styles for the mantine editor
import "@blocknote/mantine/style.css";
// Include the included Inter font
import "@blocknote/core/fonts/inter.css";

export const AppEditor = () => {
  const editor = useCreateBlockNote({
    dictionary: ko,
  });
  // Render the editor
  return <BlockNoteView editor={editor} />;
};
