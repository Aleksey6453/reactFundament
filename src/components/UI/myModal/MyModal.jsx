import React from 'react'
import styles from './MyModal.module.css'

const MyModal = ({children}) => {
  return (
    <div>
      <div className={[styles.modal, styles.active].join(' ')}>
        <div className={styles.modal_content}>
            {children}
        </div>
      </div>
    </div>
  )
}

export default MyModal
