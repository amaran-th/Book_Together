import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { cards } from '../TestData'
const getBgImg = id => {
  try {
    return <img src={require('../../../assets/img/bgImg/' + id + '.png')} />
  } catch (e) {
    return <img src={require('../../../assets/img/bgImg/default.png')} />
  }
}
function Card({ postId, cardN }) {
  const Cards = cards[postId - 1]
  const [currentId, setCurrentId] = useState(1)
  const [currentCard, setCurrentCard] = useState(Cards[currentId - 1])

  const previousCard = () => {
    setCurrentId(currentId - 1)
  }
  const nextCard = () => {
    setCurrentId(currentId + 1)
  }

  useEffect(() => {
    console.log('reload Card.jsx')
    //console.log(currentId)
    setCurrentCard(Cards[currentId - 1])
  }, [currentId])

  return (
    <>
      <div className="border border-red-300">
        <div className="flex justify-between items-center">
          <button
            className={
              (currentId === 1 ? 'text-gray-300 dark:text-gray-600' : '') +
              ' text-5xl'
            }
            onClick={() => previousCard()}
            disabled={currentId === 1}
          >
            {'<'}
          </button>
          <div
            className={
              'relative flex flex-col justify-between border w-[20em] h-[20em]'
            }
          >
            {getBgImg(currentCard?.bgImageId)}
            <div className="absolute top-0  flex flex-col justify-between w-full h-full">
              <p className="text-5xl">"</p>
              <div className="border text-center font-content">
                {currentCard?.content}
              </div>
              <p className="border text-right">{currentCard?.page}p</p>
            </div>
          </div>
          <button
            className={
              (currentId === cardN ? 'text-gray-300 dark:text-gray-600' : '') +
              ' text-5xl'
            }
            onClick={() => nextCard()}
            disabled={currentId === cardN}
          >
            {'>'}
          </button>
        </div>
        <div className="flex justify-center">
          <span
            className={
              (currentId === cardN ? 'text-main font-bold' : '') +
              ' inline-block border border-gray-300 min-w-[4em] py-1 px-2 m-[1px] text-sm text-center rounded-full'
            }
          >
            {currentId + '/' + cardN}
          </span>
        </div>
      </div>
    </>
  )
}

export default Card
