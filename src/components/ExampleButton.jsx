export default function ExampleButton({children, isStyled, ...props }) {
  return(
      <li><button className={isStyled ? 'active' : ''} {...props}>{children}</button></li>
  )
}