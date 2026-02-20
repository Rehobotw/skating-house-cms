export default function Input({
    label,
    type = "text",
    placeholder,
    name,
    value,
    onChange,
}) {
    const inputId = name || label?.toLowerCase()?.replace(/\s+/g, "-");

    return (
        <div className="form-group">
            {label && (
                <label htmlFor={inputId}>{label}</label>
            )}
            <input
                id={inputId}
                name={name}
                className="input"
                type={type}
                placeholder={placeholder || label}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}