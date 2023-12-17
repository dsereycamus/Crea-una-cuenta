const Alert = ({ message, type }) => {
  return (
    <div className={`alert mt-3 alert-${type}`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
