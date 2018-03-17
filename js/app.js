import 'bootstrap';

// import Homepage from './components/Homepage';
// Components
import Homepage from './Components/Homepage';

const init = () => {
  const GLOBALS = {
    breakpoints: {
      sm: 768,
      md: 992,
      lg: 1200,
    },
  };

  [
    Homepage,
  ].forEach(e => e.factory(GLOBALS));
};

((callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
})(init);

export {
  Homepage,
};
