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


document.addEventListener("DOMContentLoaded", function(event) {
  const mainEl = select('.js-main')
  const checkboxAllEl = select('.js-checkbox-all')
  const checkboxRemoveAllEl = select('.js-checkbox-remove-all')
  const checkboxActionEls = selectAll('.js-checkbox-action')
  const checkboxItemEls = selectAll('.js-checkbox-item')
  const deleteItemEls = selectAll('.js-delete-item')
  const heartItemEls = selectAll('.js-heart-item')
  const minusEls = selectAll('.js-minus')
  const plusEls = selectAll('.js-plus')
  const closeModalEls = selectAll('.js-close-modal')
  const openModalEl = select('.js-open-modal')
  const overlayEl = select('.js-overlay')
  const modalEl = select('.js-modal')
  const counponItemEls = selectAll('.js-counpon-item')
  const codeInputEl = select('.js-code-input')

  //CART PAGE
  if(plusEls) {
    map(plusEl => {
      plusEl.addEventListener('click', e => {
        const parentEl = closest('.js-plus-minus', e.target)
        const quantityEl = select('.js-quantity', parentEl)
        quantityEl.innerText = parseInt(quantityEl.innerText) + 1
      })
    }, plusEls)
  }

  if(minusEls) {
    map(minusEl => {
      minusEl.addEventListener('click', e => {
        const parentEl = closest('.js-plus-minus', e.target)
        const quantityEl = select('.js-quantity', parentEl)
        if (quantityEl.innerText > 1) {
          quantityEl.innerText = parseInt(quantityEl.innerText) - 1
        }
      })
    }, minusEls)
  }
  
  if (checkboxActionEls) {
    map(checkboxActionEl => {
      checkboxActionEl.addEventListener('click', e => {
        const checkboxItem = closest('.js-checkbox-item', checkboxActionEl)
        if (hasClass('is-active', checkboxItem)) {
          removeClass('is-active', checkboxItem)
        } else {
          addClass('is-active', checkboxItem)
        }
      })
    }, checkboxActionEls)
  }

  if (deleteItemEls) {
    map(deleteItemEl => {
      deleteItemEl.addEventListener('click', () => {
        const parent = closest('.js-checkbox-item', deleteItemEl)
        addClass('is-remove', parent)
        setTimeout(() => {
          parent.parentNode.removeChild(parent)
        }, 600)
      })
    }, deleteItemEls)
  }

  if (heartItemEls) {
    map(heartItemEl => {
      heartItemEl.addEventListener('click', () => {
        if (hasClass('is-heart', heartItemEl)) {
          removeClass('is-heart', heartItemEl)
        } else {
          addClass('is-heart', heartItemEl)
        }
      })
    }, heartItemEls)
  }

  if (checkboxRemoveAllEl) {
    checkboxRemoveAllEl.addEventListener('click', () => {
      const checkboxItemActiveEls = selectAll('.is-active', mainEl)
      map(checkboxItemActiveEl => {
        addClass('is-remove', checkboxItemActiveEl)
        setTimeout(() => {
          checkboxItemActiveEl.parentNode.removeChild(checkboxItemActiveEl)
        }, 600)
      }, checkboxItemActiveEls)
    })
  }
  
  if (checkboxAllEl) {
    checkboxAllEl.addEventListener('click', e => {
      if (hasClass('is-checked', e.target)) {
        removeClass('is-checked', e.target)
        if (checkboxItemEls) {
          map(checkboxItemEl => {
            removeClass('is-active', checkboxItemEl)
          }, checkboxItemEls)
        }
      } else {
        addClass('is-checked', e.target)
        if (checkboxItemEls) {
          map(checkboxItemEl => {
            addClass('is-active', checkboxItemEl)
          }, checkboxItemEls)
        }
      }
    })
  }

  //COUPON
  if (closeModalEls) {
    map(closeEl => {
      closeEl.addEventListener('click', () => {
        removeClass('is-active', overlayEl)
        removeClass('is-active', modalEl)

        const selectedEl = select('.is-active', modalEl)
        const codeCouponEl = select('.js-code-coupon', selectedEl)
        const codeCoupon = codeCouponEl.innerText
        
        codeInputEl.innerText = codeCoupon
      })
    }, closeModalEls)
  }

  if (openModalEl) {
    openModalEl.addEventListener('click', () => {
      addClass('is-active', overlayEl)
      addClass('is-active', modalEl)
    })
  }

  if (counponItemEls) {
    map((counponItemEl, index1) => {
      counponItemEl.addEventListener('click', e => {
        map((counponItemEl, index2) => {
          if (index1 !== index2) removeClass('is-active', counponItemEl)
        }, counponItemEls)

        if (hasClass('is-active', e.target)) {
          removeClass('is-active', e.target)
        } else {
          addClass('is-active', e.target)
        }
      })
    }, counponItemEls)
  }
});
