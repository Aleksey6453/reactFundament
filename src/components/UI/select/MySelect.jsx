import React from 'react'
import styles from './MySelect.module.css'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select value={value}
            onChange={e => onChange(e.target.value)}
            className={styles.select}>
      <option  value="">{defaultValue}</option>
        {options.map(option => 
          <option key={option.value}  value={option.value}>
            {option.name}
          </option>
        )}
    </select>
  )
}

export default MySelect
