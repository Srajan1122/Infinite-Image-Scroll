import "../css/loader.css";

export const Loader = () => {
  return (
    <div className="center">
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  );
}
