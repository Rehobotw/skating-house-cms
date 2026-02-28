export default function TextArea({
    name,
    label,
    type = "text",
    // placeholder,
    value,
    onChange,
}){
      const inputId = name?.toLowerCase()?.replace(/\s+/g, "-");
    return(
        
        <div className="form-group">
            <label>{label}</label>
            <textarea 
                id={inputId}
                className="textarea"
                rows="4"
                name={name}
                type={type}
                // placeholder={placeholder || label}
                value={value||""}
                onChange={onChange}
            />
        </div>
    );
}