// src/index.ts
import { Logger } from "@hocuspocus/extension-logger";
import { SQLite } from "@hocuspocus/extension-sqlite";
import { Server } from "@hocuspocus/server";
import { slateNodesToInsertDelta } from "@slate-yjs/core";
import * as Y from "yjs";

// src/data/initialValue.json
var initialValue_default = [
  { type: "heading-one", children: [{ text: "Lorem Ipsum" }] },
  {
    type: "block-quote",
    children: [
      {
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      }
    ]
  },
  { type: "paragraph", children: [{ text: "" }] },
  { type: "heading-two", children: [{ text: "What is Lorem Ipsum?" }] },
  {
    type: "paragraph",
    children: [
      { text: "Lorem Ipsum", bold: true },
      {
        text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    ]
  },
  { type: "paragraph", children: [{ text: "" }] },
  {
    type: "heading-two",
    children: [{ text: "Where does it come from?" }]
  },
  {
    type: "paragraph",
    children: [
      {
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
      }
    ]
  },
  {
    type: "paragraph",
    children: [
      {
        text: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
      }
    ]
  },
  { type: "paragraph", children: [{ text: "" }] },
  {
    type: "heading-two",
    children: [{ text: "Why do we use it?" }]
  },
  {
    type: "paragraph",
    children: [
      {
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      }
    ]
  },
  { type: "paragraph", children: [{ text: "" }] },
  {
    type: "heading-two",
    children: [{ text: "Where can I get some?" }]
  },
  {
    type: "paragraph",
    children: [
      {
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      }
    ]
  }
];

// src/index.ts
var _a;
var server = Server.configure({
  port: parseInt((_a = process.env.PORT) != null ? _a : "", 10) || 1234,
  extensions: [
    new Logger(),
    new SQLite({
      database: "db.sqlite"
    })
  ],
  async onLoadDocument(data) {
    if (data.document.isEmpty("content")) {
      const insertDelta = slateNodesToInsertDelta(initialValue_default);
      const sharedRoot = data.document.get("content", Y.XmlText);
      sharedRoot.applyDelta(insertDelta);
    }
    return data.document;
  }
});
server.enableMessageLogging();
server.listen();
