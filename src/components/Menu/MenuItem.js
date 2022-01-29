export const MenuItem = ({textProps, linkProps, classProps, logoProps}) => {
  return (
    <li className={classProps.item}>
      <a href={linkProps} className={classProps.link}>
        <span className="avatar">{logoProps != null ? logoProps : ''}</span>
        <span>{textProps}</span>
      </a>
    </li>
  )
}
