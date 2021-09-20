const leftSideTemplate = [
  {
    el: 'aside',
    classNames: 'leftSide',
    parent: 'cv',
    child: [
      {
        el: 'header',
        classNames: 'info',
        child: [
          {
            el: 'div',
            classNames: 'info__photo',
            child: [
              {
                el: 'img',
                classNames: 'info__photo-image',
                dataAttr: [['src', './'], ['alt', 'photo of Alexander']]
              }
            ],
          },
          {
            el: 'h1',
            classNames: 'info__name',
            text: 'Alexander Rybakov',
          },
          {
            el: 'h5',
            classNames: 'info__spec',
            text: 'Front-End Developer',
          },
          {
            el: 'div',
            classNames: 'socials',
            child: [
              {
                el: 'ul',
                classNames: 'socials__list',
                child: [
                  {
                    el: 'li',
                    classNames: 'socials__item',
                    child: [
                      {
                        el: 'a',
                        classNames: 'socials__link',
                      },
                    ],
                  },
                  {
                    el: 'li',
                    classNames: 'socials__item',
                    child: [
                      {
                        el: 'a',
                        classNames: 'socials__link',
                      },
                    ],
                  },
                  {
                    el: 'li',
                    classNames: 'socials__item',
                    child: [
                      {
                        el: 'a',
                        classNames: 'socials__link',
                      },
                    ],
                  },
                  {
                    el: 'li',
                    classNames: 'socials__item',
                    child: [
                      {
                        el: 'a',
                        classNames: 'socials__link',
                      },
                    ],
                  },
                ],
              }
            ],
          },
        ],
      },
    ],
  },
];

export default leftSideTemplate;
