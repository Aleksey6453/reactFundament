import React from 'react'
import styles from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
    const rootStyles = [styles.modal]
    if (visible) {
        rootStyles.push(styles.active)
    }

    const test = ()=> {
        alert(22)
    }

  return (
    <div>
      <div className= {rootStyles.join(' ')} onClick={()=>setVisible(false)}>
        <div className={styles.modal_content} onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
      </div>
    </div>
  )
}

export default MyModal
