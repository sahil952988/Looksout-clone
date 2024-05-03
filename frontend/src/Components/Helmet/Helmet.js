export const Helmet = (props) => {
  document.title = "Lookscout - " + props.title;

  return (
    <div>{props.children}</div>
  )
}