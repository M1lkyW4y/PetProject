import AbstractComponent from '../../Core/AbstractComponent';

export default class Villages extends AbstractComponent {
  constructor(globals) {
    super(globals, '.js-homepage');
  }

  testScript = () => console.log('homepage is loaded');
  onInit() {
    this.testScript();
  }
}
