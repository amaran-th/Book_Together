import React, { useState } from 'react'

const products = [
  {
    id: 1,
    name: '2022 1학기 OO 수행평가',
    href: '#',
    state: '진행중',
    type: '다같이',
    memberN: 3,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'OO 도서관 독서회',
    href: '#',
    state: '진행중',
    type: '각자',
    memberN: 4,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: '수행평가',
    href: '#',
    state: '진행중',
    type: '다같이',
    memberN: 6,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'OO 동아리 북클럽',
    href: '#',
    state: '완료',
    type: '각자',
    memberN: 4,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'OO 동아리 북클럽',
    href: '#',
    state: '완료',
    type: '각자',
    memberN: 4,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]

//북클럽
function BookClub() {
  const [currentBookClub, setCurrentBookClub] = useState()
  return (
    <div className="min-h-[80vh] space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <div className="shadow sm:rounded-md sm:overflow-hidden dark:border dark:border-gray-700">
        <div className="py-6 px-4 space-y-6 sm:p-6">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg leading-6 font-medium">북클럽</h3>
              <p className="mt-1 text-sm text-gray-500">
                당신이 참여한 북클럽을 확인해보세요.
              </p>
            </div>
            <button
              type="button"
              className="block border border-main rounded-full shadow-sm py-2 px-3 text-sm text-black leading-4 font-medium bg-sub hover:shadow-md focus:outline-none dark:hover:bg-gray-900"
            >
              + 북클럽 만들기
            </button>
          </div>

          {currentBookClub ? (
            <div className="border-2 rounded-lg p-2 col-span-3">
              <div className="mt-1 flex items-center space-x-4">
                <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-20 w-20">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <div className="w-full flex justify-between">
                  <div>
                    <p>aaa</p>
                    <p>북클럽 ID : @aaa</p>
                    <p>리더 : </p>
                    <p>회원 : </p>
                    <p>생성일 : </p>
                    <p className="text-sm text-gray-500">북클럽 소개 :aaa</p>
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <button
                      type="button"
                      className="block border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium hover:bg-gray-50 hover:shadow-md focus:outline-none dark:hover:bg-gray-900"
                    >
                      즐겨찾기에 추가
                    </button>
                    <button
                      type="button"
                      className="block border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm text-red-500 leading-4 font-medium hover:bg-gray-50 hover:shadow-md focus:outline-none dark:hover:bg-gray-900"
                    >
                      북클럽 탈퇴하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="col-span-3">
            <label className="block text-sm font-medium">참여한 북클럽</label>
            <div className="border rounded-lg  p-4 sm:px-6 lg:px-8">
              <h2 className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map(product => (
                  <button
                    key={product.id}
                    className="group"
                    onClick={() => setCurrentBookClub(product)}
                  >
                    <div className="w-full bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm">{product.name}</h3>
                    <p className="flex justify-between mt-1 text-lg font-medium ">
                      <span>{product.state}</span>
                      <span className="text-sm text-gray-500">
                        {product.memberN}명
                      </span>
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookClub
