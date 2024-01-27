import React from 'react'
import styles from '@/app/components/Button/button.module.sass'
import Link from 'next/link'

const Button = (props) => {
   if(props.href) {
    return(
      <Link href={props.href} className={styles.button}>
      {props.children}
      </Link>
    )
   }
  return (

    <button className={styles.button}> 
        {props.children}
    </button>
  )
}

export default Button
