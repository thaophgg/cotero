import { select, selectAll, map, closest, hasClass, removeClass, addClass, isMobile } from './lib/dom.js'

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

  // SLIDER 
  const sliderEl = select('.js-slider')
  
  if (sliderEl) {
    const options = {
      groupCells: isMobile() ? '1' : '5',
      prevNextButtons: true,
      pageDots: false,
      wrapAround: true,
      contain: true,
      autoPlay: 4000,
    }

    let slider = null
    
    slider = new Flickity(sliderEl, options)
  }
});
