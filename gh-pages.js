import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/pkazala/svelte-personal-website', // Update to point to your repository
  user: {
   name: 'pkazala', // update to use your name
   email: 'pepe.kazala@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);