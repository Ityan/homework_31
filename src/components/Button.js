import ProtoTypes from "prop-types";

function Button({ onClick, children }) {
  return (
    <button type="button" className="next-btn" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: ProtoTypes.func.isRequired,
  children: ProtoTypes.string.isRequired
};

export default Button;
