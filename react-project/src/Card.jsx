export default function card(props) {
  return (
    <>
      <div>{props.id}</div>
      <div>{props.body.slice(0,10)}</div>
      <div>{props.title}</div>
    </>
  );
}
