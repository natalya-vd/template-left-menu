import './Input.css';

export const Input = ({typeProps = 'text', classProps = 'input', placeholderProps = '', nameProps = 'input', handleInput}) => {
  return (
    <input className={classProps} type={typeProps} onChange={handleInput} placeholder={placeholderProps} name={nameProps} />
  )
}
