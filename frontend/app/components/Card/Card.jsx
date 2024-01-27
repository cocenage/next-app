import React from 'react'
import styles from '@/app/components/Card/card.module.sass'
import Button from '@/app/components/Button/Button'
import Image from 'next/image'
const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__wrapper}>
        <h2 className={styles.card__title}>{props.name}</h2>
        <p className={styles.card__text}>{props.text}</p>
        <Image
      src="/www.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
        <Button href="/post"></Button>
      </div>
    </div>
  )
}

export default Card
