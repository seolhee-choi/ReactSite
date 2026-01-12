import { useCreateBlockNote } from "@blocknote/react";
// Or, you can use ariakit, shadcn, etc.
import { BlockNoteView } from "@blocknote/mantine";
import { ko } from "@blocknote/core/locales";
// Default styles for the mantine editor
import "@blocknote/mantine/style.css";
// Include the included Inter font
import "@blocknote/core/fonts/inter.css";
import type { Block } from "@blocknote/core";
import { useEffect } from "react";

interface Props {
  props: Block[];
  setContent?: (content: Block[]) => void;
  readonly?: boolean;
}

export const AppEditor = ({ props, setContent, readonly }: Props) => {
  const editor = useCreateBlockNote({
    dictionary: ko,
  });

  useEffect(() => {
    if (props && props.length > 0) {
      const current = JSON.stringify(editor.document);
      const next = JSON.stringify(props);

      // current 와 next 값이 같으면 교체를 안함 => 무한 루프를 방지하기 위함
      if (current !== next) {
        editor.replaceBlocks(editor.document, props);
      }
    }
  }, [props, editor]);

  // Render the editor
  // editor.document를 사용하면, block note에 작성하는 내용이 setContent에 저장됨
  return (
    <BlockNoteView
      editor={editor}
      editable={!readonly}
      onChange={() => {
        if (!readonly) {
          setContent?.(editor.document);
        }
      }}
    />
  );
};
