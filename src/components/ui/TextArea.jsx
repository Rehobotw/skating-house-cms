export default function TextArea({
    label,
    type = "text",
    // placeholder,
    value,
    onChange,
}){
    return(
        <div className="form-group">
            <label>{label}</label>
            <textarea 
                className="textarea"
                rows="4"
                type={type}
                // placeholder={placeholder || label}
                value={value||""}
                onChange={onChange}
            />
        </div>
    );
}