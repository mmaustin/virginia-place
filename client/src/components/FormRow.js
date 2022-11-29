

const FormRow = ({labelText, type, name, value, handleChange}) => {
  return (
    <div>
        <label htmlFor={name} className='form-label' >
            {labelText || name}
        </label>
        <input type={type} id={name} name={name} value={value} onChange={handleChange} className='form-input' />
    </div>
  )
}
export default FormRow