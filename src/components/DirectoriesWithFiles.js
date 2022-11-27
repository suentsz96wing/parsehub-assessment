import Directory from "./Directory";
import "./DirectoriesWIthFiles.css";
export default function DirectoriesWithFiles(props) {
  const { files, handleDirectoryChange } = props;
  return (
    <div className="parent">
      {Object.entries(files).map(([key, value]) => {
        return (
          <div
            key={key}
            className="child"
            onClick={() => handleDirectoryChange(key)}
          >
            <Directory label={key} type={value.type} />
          </div>
        );
      })}
    </div>
  );
}
