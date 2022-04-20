import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { cards } from '../TestData'
const getBgImg = id => {
  try {
    return (
      <img
        className="rounded-lg"
        src={require('../../../assets/img/bgImg/' + id + '.png')}
      />
    )
  } catch (e) {
    return (
      <img
        className="rounded-lg"
        src={require('../../../assets/img/bgImg/default.png')}
      />
    )
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
      <div className="">
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
              'relative flex flex-col justify-between w-[20em] rounded-lg'
            }
          >
            {getBgImg(currentCard?.bgImageId)}
            <div className="absolute top-0  flex flex-col justify-between w-full h-full p-2">
              <p className="text-5xl">66</p>
              <div className="border text-center text-lg font-content">
                {currentCard?.content}
              </div>
              <p className="border text-right text-xl">{currentCard?.page}p</p>
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
