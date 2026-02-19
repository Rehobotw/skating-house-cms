export default function Button({ text, children }) {
    return (
        <button className="primary-btn">{children || text}</button>
    );
}
