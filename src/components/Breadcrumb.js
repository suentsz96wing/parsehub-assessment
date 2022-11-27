import "./Breadcrumb.css";
export default function Breadcrumb(props) {
  const { path, handleDirectoryChange } = props;
  return (
    <ul className="breadcrumb">
      {path.map((el, index) => {
        return (
          <li key={el.name}>
            {index === path.length - 1 ? (
              el.name
            ) : (
              <a
                href={`#${el.name}`}
                onClick={() => handleDirectoryChange(el.name)}
              >
                {el.name}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
