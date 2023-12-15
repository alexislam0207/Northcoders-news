import "./Error.css"

const Error = ({msg}) => {
  return (
    <div className="error">
      <h2>Error</h2>
      <p>{msg}</p>
    </div>
  );
};
export default Error;
