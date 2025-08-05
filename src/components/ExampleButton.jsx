export default function ExampleButton({children, onSelect, isStyled }) {
  return(
      <li><button className={isStyled ? 'active' : ''} onClick={onSelect}>{children}</button></li>
  )
}