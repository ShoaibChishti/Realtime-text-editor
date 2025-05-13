import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";

const ydoc = new Y.Doc();
const provider = new WebrtcProvider("realtime-editor-room", ydoc);

const Editor = () => {
  const [userName] = useState(() => prompt("Enter your name") || "Anonymous");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider,
        user: {
          name: userName,
          color: "#" + Math.floor(Math.random() * 16777215).toString(16),
        },
      }),
    ],
  });

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Collaborative Editor ({userName})</h2>
      <div className="border border-gray-300 rounded p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
