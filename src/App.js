import Breadcrumb from "./components/Breadcrumb";
import DirectoriesWithFiles from "./components/DirectoriesWithFiles";
import "./App.css";
import useDirectoryMethod from "./hooks/useDirectoryMethod";

function App() {
  const { currentDirectoryNode, handleDirectoryChange } = useDirectoryMethod();

  return (
    <div className="App">
      <Breadcrumb
        path={currentDirectoryNode.path}
        handleDirectoryChange={handleDirectoryChange}
      />
      {currentDirectoryNode.type === "file" ? (
        <div>THIS IS FILE: ${currentDirectoryNode.name}</div>
      ) : (
        <DirectoriesWithFiles
          files={currentDirectoryNode.children}
          handleDirectoryChange={handleDirectoryChange}
        />
      )}
    </div>
  );
}

export default App;
