const curry = (f, ...args) =>
  args.length >= f.length ? f(...args) : curry.bind(this, f, ...args);
const makeArray = (arrayLike) => Array.prototype.slice.call(arrayLike);
const map = curry((f, arr) => (Array.isArray(arr) ? arr.map(f) : f(arr)));

const selectAll = (selector, parent = document) => makeArray(parent.querySelectorAll(selector));
const select = (selector, parent = document) => parent.querySelector(selector)

const _getAttribute = (name, el) => el.getAttribute(name);
const getAttribute = curry(_getAttribute);

const _getData = (name, el) => _getAttribute("data-" + name, el);
const getData = curry(_getData);

const removeClass = curry((className, els) =>
  map(el => {
    el.classList.remove(className)
    return el
  }, els)
)

const addClass = curry((className, els) =>
  map(el => {
    el.classList.add(className)
    return el
  }, els)
)


const trigger = (eventName, el) => {
  let event
  let data = {}
  if (typeof eventName === 'object') {
    data = eventName.data
    eventName = eventName.event
  }
  if (typeof window.CustomEvent === 'function') {
    event = new CustomEvent(eventName, { detail: data })
  } else {
    event = document.createEvent('CustomEvent')
    event.initCustomEvent(eventName, true, true, data)
  }
  el.dispatchEvent(event)
  return el
}

const hasClass = curry((className, el) => el.classList.contains(className))


const whileDo = (pred, fn, initial) =>
  pred(initial) ? whileDo(pred, fn, fn(initial)) : initial

const matches = (selector, el) =>
(
  Element.prototype.matches ||
  Element.prototype.matchesSelector ||
  Element.prototype.mozMatchesSelector ||
  Element.prototype.msMatchesSelector ||
  Element.prototype.oMatchesSelector ||
  Element.prototype.webkitMatchesSelector
).apply(el, [selector])

const closest = curry((selector, el) =>
  whileDo(
    target => target && !matches(selector, target) && target.parentNode,
    target => (target.parentNode === document ? null : target.parentNode),
    el.parentNode
  )
)

const isMobile = () => {
  return (window.innerWidth > 992) ? false : true
}


export {
  selectAll,
  select,
  removeClass,
  addClass,
  trigger,
  hasClass,
  closest,
  isMobile,
  map
}