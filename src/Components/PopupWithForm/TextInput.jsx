const TextInput = ({ label, name, value, onChange, type = "text", error }) => (
  <div className="form-group">
    <label className="popup__label">{label}</label>
    <input
      className="popup__input"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
    {error && <p className="form-error">{error}</p>}
  </div>
);

export default TextInput;
