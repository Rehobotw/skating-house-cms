export default function Card({ title, children, className = "" }) {
	const classes = ["card", className].filter(Boolean).join(" ");
	return (
		<div className={classes}>
			{title && <h2>{title}</h2>}
			{children}
		</div>
	);
}
