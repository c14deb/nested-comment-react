import "./App.css";
import Comment from "./components/Comment";
import { useState } from "react";
import useNode from "./hooks/useNode";
const comments = {
  id: 1,
  items: [
    // {
    //   id: 8464784884,
    //   name: "hello",
    //   items: [
    //     {
    //       id: 3883893993,
    //       name: "hello world",
    //       items: [
    //         {
    //           id: 78667878,
    //           name: "hello hello hello world",
    //           items: [],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   id: 98889444,
    //   name: " 2nd hello",
    //   items: [],
    // },
  ],
};

function App() {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  return (
    <div className="App">
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
  );
}

export default App;
