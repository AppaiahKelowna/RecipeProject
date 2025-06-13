export default function Count(props) {
  console.log("Count component Rendered");
  return <h2 className="count">{props.number}</h2>;
}
