export default function Input({ label, type = "text", placeholder }) {
    return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <input
                className="input"
                type={type}
                placeholder={placeholder || label}
            />
        </div>
    );
}