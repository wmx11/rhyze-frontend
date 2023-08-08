import { animate, inView, stagger, glide } from 'motion';

inView(
  'section',
  (info) => {
    animate(
      info.target.querySelectorAll('.animate'),
      {
        opacity: [0, 1],
        transform: ['translateY(-150px)', 'translateY(0px)'],
      },
      {
        duration: 1,
        delay: stagger(0.2),
      }
    );
  },
  { margin: '-25%' }
);
inView(
  'section',
  (info) => {
    animate(
      info.target.querySelectorAll('.animate-palm-1'),
      {
        left: ['-100%', '-650px'],
        rotate: [0, 15],
      },
      {
        duration: 1,
        delay: stagger(0.2),
      }
    );
  },
  { margin: '-25%' }
);
inView(
  'section',
  (info) => {
    animate(
      info.target.querySelectorAll('.animate-palm-2'),
      {
        right: ['-100%', '-700px'],
        rotate: [0, -25],
      },
      {
        duration: 1,
        delay: stagger(0.2),
      }
    );
  },
  { margin: '-25%' }
);
