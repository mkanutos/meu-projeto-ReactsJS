import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}) {
    return (
        <di className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select 
                name={name} 
                id={name} 
                onChange={handleOnChange} 
                value={value || ''}>
                <option>Seleccione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </di>
    )
}

export default Select