export default function TextArea({label}){
    return(
        <div className="form-group">
            <label>{label}</label>
            <textarea className="textarea" rows="4"/>
        </div>
    );
}