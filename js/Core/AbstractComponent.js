/**
 * Defines the methods and properties of a base component
 *
 * @export
 * @class AbstractComponent
 */
export default class AbstractComponent {
  constructor(globals, selector, multiple = false) {
    this.selector = selector;
    this.$section = null;
    this.globals = globals;

    if (typeof selector === 'string') {
      if (!multiple) this.$section = document.querySelector(selector);
      else this.$section = document.querySelectorAll(selector);
    }
    if (selector instanceof Element) this.$section = selector;
  }

  /**
   * Check if the component exist in the dom
   *
   * @readonly
   * @memberof AbstractComponent
   */
  get exists() {
    return (this.selector !== undefined && this.$section !== undefined && this.$section !== null);
  }

  /**
   * Returns the global breakpoints object
   *
   * @readonly
   * @memberof AbstractComponent
   */
  get breakpoints() {
    return this.globals.breakpoints;
  }

  /**
   * Init a component asynchrounousely
   *
   * @returns This
   * @memberof AbstractComponent
   */
  init() {
    if (!this.exists) return null;
    if (this.onInit) this.onInit();
    if (this.onWindowResize) {
      window.addEventListener('resize', () => {
        this.onWindowResize(window.innerWidth, window.innerHeight);
      });
    }
    return this;
  }

  /* eslint-disable class-methods-use-this */
  /**
   * Stub method
   *
   * @memberof AbstractComponent
   */
  onInit() {
  }

  /**
   * Stub method
   *
   * @memberof AbstractComponent
   */
  onWindowResize() {
  }
  /* eslint-enable class-methods-use-this */

  /**
   * static factory to ease the init in the main.js
   *
   * @static
   * @param {any} globals
   * @param {Node} $container
   * @returns ComponentInstance
   * @memberof AbstractComponent
   */
  static factory(globals, $container) {
    const component = new this(globals, $container);
    return component.init();
  }

  /**
   * Shows an HTML Element
   *
   * @static
   * @param {any} $el
   * @memberof AbstractComponent
   */
  static show($el) {
    $el.classList.remove('d-none');
  }

  /**
   * Hides an HTML Element
   *
   * @static
   * @param {any} $el
   * @memberof AbstractComponent
   */
  static hide($el) {
    $el.classList.add('d-none');
  }
}
