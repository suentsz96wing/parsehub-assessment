import DirectoryIcon from "../assets/directory.svg";
import FileIcon from "../assets/file.svg";
export default function Directory(props) {
  const { type, label } = props;

  return (
    <>
      {type === "dir" ? (
        <>
          <img src={DirectoryIcon} width={100} alt="directory" />
          <div>{label}</div>
        </>
      ) : (
        <>
          <img src={FileIcon} width={100} alt="directory" />
          <div>{label}</div>
        </>
      )}
    </>
  );
}
