import { root } from "../type";
import React from "react";
export default function useDirectoryMethod() {
  const [currentDirectory, setCurrentDirectory] = React.useState("home");

  const directoriesMap = React.useMemo(() => {
    let node = root;
    const map = new Map();
    const path = [];
    map.set("root", { ...node, path });
    setDirectoriesMap(node, path);
    function setDirectoriesMap(node, path) {
      if (node.children) {
        Object.entries(node.children).forEach(([key, value]) => {
          const newPath = path.concat([{ name: key, path: key }]);
          map.set(key, { ...value, path: newPath, name: key });

          if (value.children) {
            setDirectoriesMap(value, newPath);
          }
        });
      }
    }
    return map;
  }, []);
  const currentDirectoryNode = React.useMemo(() => {
    return directoriesMap.get(currentDirectory);
  }, [currentDirectory, directoriesMap]);

  return {
    currentDirectoryNode,
    handleDirectoryChange: (directory) => {
      setCurrentDirectory(directory);
    },
  };
}
