const posts = [
  {
    postId: 1,
    title: '유년기의 끝',
    author: '아서 C. 클라크',
    publisher: '시공사',
    registerDate: '20220410...',
    modifyDate: '20220410...',
    keywords: ['SF', '장편소설', '계시문학'],
    cardN: 3,
    grade: 4,
    review: '재밌었다.',
  },
  {
    postId: 2,
    title: '젊은 베르테르의 슬픔',
    author: '요한 볼프강 폰 괴테',
    publisher: '민음사',
    registerDate: '20220410...',
    modifyDate: '20220410...',
    keywords: ['연애소설'],
    cardN: 2,
    grade: 5,
    review: '재밌었다.',
  },
]
const cards = [
  [
    {
      id: 1,
      content: '인용구',
      page: 234,
      bgImage: '이미지 링크',
      detail: '아무말',
      font: '돋움',
    },
    {
      id: 2,
      content: '인용구2',
      page: 234,
      bgImage: '이미지 링크',
      detail: '아무말2',
      font: '돋움',
    },
    {
      id: 3,
      content: '인용구3',
      page: 234,
      bgImage: '이미지 링크',
      detail: '아무말3',
      font: '돋움',
    },
  ],
  [
    {
      id: 1,
      content:
        '두번째 인용구dddddddddddddd ddddddddddddddd ddddddddd dd ddddddd ddddddddd ddddddddddd dddddddddddddddd',
      page: 101,
      bgImage: '이미지 링크',
      detail: '아무말',
      font: '돋움',
    },
    {
      id: 2,
      content: '두번째 인용구2',
      page: 102,
      bgImage: '이미지 링크',
      detail: '아무말2',
      font: '돋움',
    },
  ],
]

export { posts, cards }
