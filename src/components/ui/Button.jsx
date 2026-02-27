export default function Button({ text, children ,onClick}) {
    return (
        <button className="primary-btn" onClick={onClick}>{children || text}</button>
    );
}
