import categoryItems from '@/sections/Categories/categoryItems'

const collectionGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/5.jpg',
              '/src/assets/images/categories/action/6.jpg',
              '/src/assets/images/categories/action/7.jpg',
              '/src/assets/images/categories/action/8.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1b.jpg',
              '/src/assets/images/categories/adventure/2b.jpg',
              '/src/assets/images/categories/adventure/5.jpg',
              '/src/assets/images/categories/adventure/6.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/2b.jpg',
              '/src/assets/images/categories/comedy/5.jpg',
              '/src/assets/images/categories/comedy/6.jpg',
              '/src/assets/images/categories/comedy/7.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/5.jpg',
              '/src/assets/images/categories/drama/6.jpg',
              '/src/assets/images/categories/drama/7.jpg',
              '/src/assets/images/categories/drama/8.jpg',
            ]
          },

          {
            title: 'Action 1',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/5.jpg',
              '/src/assets/images/categories/action/6.jpg',
              '/src/assets/images/categories/action/7.jpg',
              '/src/assets/images/categories/action/8.jpg',
            ]
          },
          {
            title: 'Adventure 1',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1b.jpg',
              '/src/assets/images/categories/adventure/2b.jpg',
              '/src/assets/images/categories/adventure/5.jpg',
              '/src/assets/images/categories/adventure/6.jpg',
            ]
          },
          {
            title: 'Comedy 1',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/2b.jpg',
              '/src/assets/images/categories/comedy/5.jpg',
              '/src/assets/images/categories/comedy/6.jpg',
              '/src/assets/images/categories/comedy/7.jpg',
            ]
          },
          {
            title: 'Drama 1',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/5.jpg',
              '/src/assets/images/categories/drama/6.jpg',
              '/src/assets/images/categories/drama/7.jpg',
              '/src/assets/images/categories/drama/8.jpg',
            ]
          },

          {
            title: 'Action 2',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/5.jpg',
              '/src/assets/images/categories/action/6.jpg',
              '/src/assets/images/categories/action/7.jpg',
              '/src/assets/images/categories/action/8.jpg',
            ]
          },
          {
            title: 'Adventure 2',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1b.jpg',
              '/src/assets/images/categories/adventure/2b.jpg',
              '/src/assets/images/categories/adventure/5.jpg',
              '/src/assets/images/categories/adventure/6.jpg',
            ]
          },
          {
            title: 'Comedy 2',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/2b.jpg',
              '/src/assets/images/categories/comedy/5.jpg',
              '/src/assets/images/categories/comedy/6.jpg',
              '/src/assets/images/categories/comedy/7.jpg',
            ]
          },
          {
            title: 'Drama 2',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/5.jpg',
              '/src/assets/images/categories/drama/6.jpg',
              '/src/assets/images/categories/drama/7.jpg',
              '/src/assets/images/categories/drama/8.jpg',
            ]
          },

          {
            title: 'Action 3',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/5.jpg',
              '/src/assets/images/categories/action/6.jpg',
              '/src/assets/images/categories/action/7.jpg',
              '/src/assets/images/categories/action/8.jpg',
            ]
          },
          {
            title: 'Adventure 3',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1b.jpg',
              '/src/assets/images/categories/adventure/2b.jpg',
              '/src/assets/images/categories/adventure/5.jpg',
              '/src/assets/images/categories/adventure/6.jpg',
            ]
          },
          {
            title: 'Comedy 3',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/2b.jpg',
              '/src/assets/images/categories/comedy/5.jpg',
              '/src/assets/images/categories/comedy/6.jpg',
              '/src/assets/images/categories/comedy/7.jpg',
            ]
          },
          {
            title: 'Drama 3',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/5.jpg',
              '/src/assets/images/categories/drama/6.jpg',
              '/src/assets/images/categories/drama/7.jpg',
              '/src/assets/images/categories/drama/8.jpg',
            ]
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          }
        },
      },
      {
        title: 'Trending Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Kisi Ka Bhai Kisi Ki Jaan',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj Pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },

          {
            title: 'Morbius 1',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Kisi Ka Bhai Kisi Ki Jaan 1',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj Pe Mangal Bhari 1',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan 1',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Ant-man 1',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },

          {
            title: 'Morbius 2',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Kisi Ka Bhai Kisi Ki Jaan 2',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj Pe Mangal Bhari 2',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan 2',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Ant-man 2',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },

          {
            title: 'Morbius 3',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Kisi Ka Bhai Kisi Ki Jaan 3',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj Pe Mangal Bhari 3',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan 3',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Ant-man 3',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },
        ],
      },
      {
        title: 'New Releases',
        movieItems: [
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/6.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Foreigner',
            imgSrc: '/src/assets/images/movies/7.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/movies/8.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies/9.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies/10.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            title: 'Adipurush 1',
            imgSrc: '/src/assets/images/movies/6.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Foreigner 1',
            imgSrc: '/src/assets/images/movies/7.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin City 1',
            imgSrc: '/src/assets/images/movies/8.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War 1',
            imgSrc: '/src/assets/images/movies/9.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire 1',
            imgSrc: '/src/assets/images/movies/10.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            title: 'Adipurush 2',
            imgSrc: '/src/assets/images/movies/6.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Foreigner 2',
            imgSrc: '/src/assets/images/movies/7.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin City 2',
            imgSrc: '/src/assets/images/movies/8.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War 2',
            imgSrc: '/src/assets/images/movies/9.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire 2',
            imgSrc: '/src/assets/images/movies/10.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            title: 'Adipurush 3',
            imgSrc: '/src/assets/images/movies/6.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Foreigner 3',
            imgSrc: '/src/assets/images/movies/7.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin City 3',
            imgSrc: '/src/assets/images/movies/8.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War 3',
            imgSrc: '/src/assets/images/movies/9.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire 3',
            imgSrc: '/src/assets/images/movies/10.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },
        ],
      },
      {
        title: 'Must - Watch Movies',
        movieItems: [
          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/11.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Pushpa 2',
            imgSrc: '/src/assets/images/movies/12.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
          {
            title: 'Blade Runner 2049',
            imgSrc: '/src/assets/images/movies/13.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/6b.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            }
          },

          {
            title: 'Kantara 1',
            imgSrc: '/src/assets/images/movies/11.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Pushpa 2 1',
            imgSrc: '/src/assets/images/movies/12.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
          {
            title: 'Blade Runner 2049 1',
            imgSrc: '/src/assets/images/movies/13.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Adipurush 1',
            imgSrc: '/src/assets/images/movies/6b.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            }
          },

          {
            title: 'Kantara 2',
            imgSrc: '/src/assets/images/movies/11.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Pushpa 2 2',
            imgSrc: '/src/assets/images/movies/12.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
          {
            title: 'Blade Runner 2049 2',
            imgSrc: '/src/assets/images/movies/13.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Adipurush 2',
            imgSrc: '/src/assets/images/movies/6b.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            }
          },

          {
            title: 'Kantara 3',
            imgSrc: '/src/assets/images/movies/11.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Pushpa 2 3',
            imgSrc: '/src/assets/images/movies/12.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
          {
            title: 'Blade Runner 2049 3',
            imgSrc: '/src/assets/images/movies/13.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Adipurush 3',
            imgSrc: '/src/assets/images/movies/6b.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            }
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          }
        },
      },
    ],
  },
  {
    title: 'Shows',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/9.jpg',
              '/src/assets/images/categories/action/10.jpg',
              '/src/assets/images/categories/action/11.jpg',
              '/src/assets/images/categories/action/12.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1b.jpg',
              '/src/assets/images/categories/adventure/2b.jpg',
              '/src/assets/images/categories/adventure/5.jpg',
              '/src/assets/images/categories/adventure/6.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/2b.jpg',
              '/src/assets/images/categories/comedy/5.jpg',
              '/src/assets/images/categories/comedy/6.jpg',
              '/src/assets/images/categories/comedy/7.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/5.jpg',
              '/src/assets/images/categories/drama/6.jpg',
              '/src/assets/images/categories/drama/7.jpg',
              '/src/assets/images/categories/drama/8.jpg',
            ]
          },

          {
            title: 'Action 1',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/9.jpg',
              '/src/assets/images/categories/action/10.jpg',
              '/src/assets/images/categories/action/11.jpg',
              '/src/assets/images/categories/action/12.jpg',
            ]
          },
          {
            title: 'Adventure 1',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1b.jpg',
              '/src/assets/images/categories/adventure/2b.jpg',
              '/src/assets/images/categories/adventure/5.jpg',
              '/src/assets/images/categories/adventure/6.jpg',
            ]
          },
          {
            title: 'Comedy 1',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/2b.jpg',
              '/src/assets/images/categories/comedy/5.jpg',
              '/src/assets/images/categories/comedy/6.jpg',
              '/src/assets/images/categories/comedy/7.jpg',
            ]
          },
          {
            title: 'Drama 1',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/5.jpg',
              '/src/assets/images/categories/drama/6.jpg',
              '/src/assets/images/categories/drama/7.jpg',
              '/src/assets/images/categories/drama/8.jpg',
            ]
          },

          {
            title: 'Action 2',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/9.jpg',
              '/src/assets/images/categories/action/10.jpg',
              '/src/assets/images/categories/action/11.jpg',
              '/src/assets/images/categories/action/12.jpg',
            ]
          },
          {
            title: 'Adventure 2',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1b.jpg',
              '/src/assets/images/categories/adventure/2b.jpg',
              '/src/assets/images/categories/adventure/5.jpg',
              '/src/assets/images/categories/adventure/6.jpg',
            ]
          },
          {
            title: 'Comedy 2',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/2b.jpg',
              '/src/assets/images/categories/comedy/5.jpg',
              '/src/assets/images/categories/comedy/6.jpg',
              '/src/assets/images/categories/comedy/7.jpg',
            ]
          },
          {
            title: 'Drama 2',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/5.jpg',
              '/src/assets/images/categories/drama/6.jpg',
              '/src/assets/images/categories/drama/7.jpg',
              '/src/assets/images/categories/drama/8.jpg',
            ]
          },

          {
            title: 'Action 3',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/9.jpg',
              '/src/assets/images/categories/action/10.jpg',
              '/src/assets/images/categories/action/11.jpg',
              '/src/assets/images/categories/action/12.jpg',
            ]
          },
          {
            title: 'Adventure 3',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1b.jpg',
              '/src/assets/images/categories/adventure/2b.jpg',
              '/src/assets/images/categories/adventure/5.jpg',
              '/src/assets/images/categories/adventure/6.jpg',
            ]
          },
          {
            title: 'Comedy 3',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/2b.jpg',
              '/src/assets/images/categories/comedy/5.jpg',
              '/src/assets/images/categories/comedy/6.jpg',
              '/src/assets/images/categories/comedy/7.jpg',
            ]
          },
          {
            title: 'Drama 3',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/5.jpg',
              '/src/assets/images/categories/drama/6.jpg',
              '/src/assets/images/categories/drama/7.jpg',
              '/src/assets/images/categories/drama/8.jpg',
            ]
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          }
        },
      },
      {
        title: 'Trending Shows Now',
        movieItems: [
          {
            title: 'Stranger Things',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Lucifer',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '12h 23min',
            season: '3 Season',
            href: '/show',
          },
          {
            title: 'The Gray Men',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },

          {
            title: 'Stranger Things 1',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Money Heist 1',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Lucifer 1',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '12h 23min',
            season: '3 Season',
            href: '/show',
          },
          {
            title: 'The Gray Men 1',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },

          {
            title: 'Stranger Things 2',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Money Heist 2',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Lucifer 2',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '12h 23min',
            season: '3 Season',
            href: '/show',
          },
          {
            title: 'The Gray Men 2',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },

          {
            title: 'Stranger Things 3',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Money Heist 3',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Lucifer 3',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '12h 23min',
            season: '3 Season',
            href: '/show',
          },
          {
            title: 'The Gray Men 3',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          }
        },
      },
      {
        title: 'New Releases Shows',
        movieItems: [
          {
            title: 'Hightown',
            imgSrc: '/src/assets/images/shows/5.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Mirzapur',
            imgSrc: '/src/assets/images/shows/6.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },
          {
            title: 'Breathe Into The Shadows',
            imgSrc: '/src/assets/images/shows/7.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Peaky Blinders',
            imgSrc: '/src/assets/images/shows/8.jpg',
            duration: '10h 30min',
            season: '3 Season',
            href: '/show',
          },

          {
            title: 'Hightown 1',
            imgSrc: '/src/assets/images/shows/5.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Mirzapur 1',
            imgSrc: '/src/assets/images/shows/6.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },
          {
            title: 'Breathe Into The Shadows 1',
            imgSrc: '/src/assets/images/shows/7.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Peaky Blinders 1',
            imgSrc: '/src/assets/images/shows/8.jpg',
            duration: '10h 30min',
            season: '3 Season',
            href: '/show',
          },

          {
            title: 'Hightown 2',
            imgSrc: '/src/assets/images/shows/5.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Mirzapur 2',
            imgSrc: '/src/assets/images/shows/6.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },
          {
            title: 'Breathe Into The Shadows 2',
            imgSrc: '/src/assets/images/shows/7.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Peaky Blinders 2',
            imgSrc: '/src/assets/images/shows/8.jpg',
            duration: '10h 30min',
            season: '3 Season',
            href: '/show',
          },

          {
            title: 'Hightown 3',
            imgSrc: '/src/assets/images/shows/5.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Mirzapur 3',
            imgSrc: '/src/assets/images/shows/6.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },
          {
            title: 'Breathe Into The Shadows 3',
            imgSrc: '/src/assets/images/shows/7.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Peaky Blinders 3',
            imgSrc: '/src/assets/images/shows/8.jpg',
            duration: '10h 30min',
            season: '3 Season',
            href: '/show',
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          }
        },
      },
      {
        title: 'Must - Watch Shows',
        movieItems: [
          {
            title: 'Duranga',
            imgSrc: '/src/assets/images/shows/9.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '23K',
            }
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/shows/10.jpg',
            duration: '12h 23min',
            rating: {
              value: 5,
              label: '28K',
            }
          },
          {
            title: 'Mai',
            imgSrc: '/src/assets/images/shows/11.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            }
          },
          {
            title: 'Stranger Things',
            imgSrc: '/src/assets/images/shows/1b.jpg',
            duration: '8h 20min',
            rating: {
              value: 4.5,
              label: '32K',
            }
          },

          {
            title: 'Duranga 1',
            imgSrc: '/src/assets/images/shows/9.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '23K',
            }
          },
          {
            title: 'Money Heist 1',
            imgSrc: '/src/assets/images/shows/10.jpg',
            duration: '12h 23min',
            rating: {
              value: 5,
              label: '28K',
            }
          },
          {
            title: 'Mai 1',
            imgSrc: '/src/assets/images/shows/11.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            }
          },
          {
            title: 'Stranger Things 1',
            imgSrc: '/src/assets/images/shows/1b.jpg',
            duration: '8h 20min',
            rating: {
              value: 4.5,
              label: '32K',
            }
          },

          {
            title: 'Duranga 2',
            imgSrc: '/src/assets/images/shows/9.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '23K',
            }
          },
          {
            title: 'Money Heist 2',
            imgSrc: '/src/assets/images/shows/10.jpg',
            duration: '12h 23min',
            rating: {
              value: 5,
              label: '28K',
            }
          },
          {
            title: 'Mai 2',
            imgSrc: '/src/assets/images/shows/11.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            }
          },
          {
            title: 'Stranger Things 2',
            imgSrc: '/src/assets/images/shows/1b.jpg',
            duration: '8h 20min',
            rating: {
              value: 4.5,
              label: '32K',
            }
          },

          {
            title: 'Duranga 3',
            imgSrc: '/src/assets/images/shows/9.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '23K',
            }
          },
          {
            title: 'Money Heist 3',
            imgSrc: '/src/assets/images/shows/10.jpg',
            duration: '12h 23min',
            rating: {
              value: 5,
              label: '28K',
            }
          },
          {
            title: 'Mai 3',
            imgSrc: '/src/assets/images/shows/11.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            }
          },
          {
            title: 'Stranger Things 3',
            imgSrc: '/src/assets/images/shows/1b.jpg',
            duration: '8h 20min',
            rating: {
              value: 4.5,
              label: '32K',
            }
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          }
        },
      },
    ],
  },
]

export default collectionGroups