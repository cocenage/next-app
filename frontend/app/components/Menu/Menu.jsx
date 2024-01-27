import React from 'react'
import styles from '@/app/components/Menu/menu.module.sass'
import Link from 'next/link'

export default function Menu(props) {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__wrapper}>
        <ul>
            <li> <Link className={styles.menu__title} href={props.ki}>{props.name1}</Link></li>
            <li> <Link className={styles.menu__title} href={props.ki2}>{props.name2}</Link></li>
            <li> <Link className={styles.menu__title} href={props.ki3}>{props.name3}</Link></li>
        </ul>
        
        
      </div>
    </div>
  )
}
