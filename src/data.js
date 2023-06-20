/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'Who painted this?',
      answers: {
        a: 'Leonardo da Vinci',
        b: 'Vincent van Gogh',
        c: 'Edvard Munch',
        d: 'Gustav Klimt',
      },
      correct: 'a',
      selected: null,
      image: './public/assets/mona_lisa.jpg',
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'Who painted this?',
      answers: {
        a: 'Leonardo da Vinci',
        b: 'Gustav Klimt',
        c: 'Vincent van Gogh',
        d: 'Edvard Munch',
      },
      correct: 'a',
      selected: null,
      image: './public/assets/last_supper.jpg',
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Who painted this?',
      answers: {
        a: 'Gustav Klimt',
        b: 'Leonardo da Vinci',
        c: 'Vincent van Gogh',
        d: 'Edvard Munch',
      },
      correct: 'c',
      selected: null,
      image: './public/assets/starry_night.jpg',
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Who painted this?',
      answers: {
        a: 'Leonardo da Vinci',
        b: 'Vincent van Gogh',
        c: 'Edvard Munch',
        d: 'Gustav Klimt',
      },
      correct: 'c',
      selected: null,
      image: './public/assets/scream.jpg',
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Who painted this?',
      answers: {
        a: 'Gustav Klimt',
        b: 'Vincent van Gogh',
        c: 'Pablo Picasso',
        d: 'Edvard Munch',
      },
      correct: 'c',
      selected: null,
      image: './public/assets/guernica.jpg',
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Who painted this?',
      answers: {
        a: 'Gustav Klimt',
        b: 'Johannes Vermeer',
        c: 'Pablo Picasso',
        d: 'Edvard Munch',
      },
      correct: 'a',
      selected: null,
      image: './public/assets/kiss.jpg',
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Who painted this?',
      answers: {
        a: 'Gustav Klimt',
        b: 'Johannes Vermeer',
        c: 'Pablo Picasso',
        d: 'Edvard Munch',
      },
      correct: 'b',
      selected: null,
      image: './public/assets/girl_with_a_pearl_earring.jpg',
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Who painted this?',
      answers: {
        a: 'Diego Velázquez',
        b: 'Sandro Botticelli',
        c: 'Pablo Picasso',
        d: 'Edvard Munch',
      },
      correct: 'b',
      selected: null,
      image: './public/assets/birth_of_venus.jpg',
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Who painted this?',
      answers: {
        a: 'Diego Velázquez',
        b: 'Sandro Botticelli',
        c: 'Michelangelo',
        d: 'Pablo Picasso',
      },
      correct: 'a',
      selected: null,
      image: './public/assets/las_meninas.jpg',
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Who painted this?',
      answers: {
        a: 'Diego Velázquez',
        b: 'Sandro Botticelli',
        c: 'Michelangelo',
        d: 'Pablo Picasso',
      },
      correct: 'c',
      selected: null,
      image: './public/assets/creation_of_adam.jpg',
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
  ],
};
