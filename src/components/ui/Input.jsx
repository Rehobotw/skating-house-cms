export default function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  ...props
}) {
  const inputId = name?.toLowerCase()?.replace(/\s+/g, "-");

  return (
    <div className="form-group">
      {label && <label htmlFor={inputId}>{label}</label>}

      <input
        id={inputId}
        name={name}
        className="input"
        type={type}
        value={value || ""}
        onChange={onChange}
        {...props}   
      />
    </div>
  );
}
