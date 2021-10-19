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


const hasClass = curry((className, el) => el.classList.contains(className))

document.addEventListener("DOMContentLoaded", function(event) {
  const body = select('body')
  const sliderEls = selectAll('.js-slider')
  const sliderLayout4Els = selectAll('.js-slider-layout-4')
  const sliderMenuEl = selectAll('.js-slideout-menu')
  const toggleSubMenuEls = selectAll('.js-toggle-sub-menu')
  const opentMenuBtn = select('.js-open-btn')
  const closeMenuBtn = select('.js-close-btn')
  const iconOpenMenuEl = select('img', opentMenuBtn)
  
  const dotsEnable = (sliderEl) => {
    const slideNumbers = selectAll('.js-slider-item', sliderEl).length
    const slideColumns = getData('columns', sliderEl)

    return (slideNumbers && slideColumns) ? ((slideNumbers > slideColumns) ? true : false) : true
  }

  const isMobile = () => {
    return (window.innerWidth > 992) ? false : true
  }
  
  if (sliderLayout4Els) {
    map((sliderLayout4El) => {
      const dotsEnableData =D getData('dots-enable', sliderLayout4El)
      const prevNextEnableData = getData('prev-next-enable', sliderLayout4El)
      const mobileVisible = getData('mobile', sliderLayout4El)
      const slideColumns = getData('columns', sliderLayout4El)

      const options = {
        groupCells: isMobile() ? '1' : slideColumns,
        prevNextButtons: isMobile() ? false : ((prevNextEnableData && (prevNextEnableData === 'false')) ? false : dotsEnable(sliderLayout4El)),
        pageDots: isMobile() ? true : ((dotsEnableData && (dotsEnableData === 'false')) ? false : dotsEnable(sliderLayout4El)),
        cellAlign: 'left',
        wrapAround: dotsEnable(sliderLayout4El),
        contain: true,
        autoPlay: 4000,
        watchCSS: (mobileVisible && (mobileVisible === 'true')) ? true : false
      }

      let slider = null
      
      slider = new Flickity(sliderLayout4El, options)
    }, sliderLayout4Els);
  }
  
  if (sliderEls) {
    map((sliderEl) => {
      const options =
        sliderEl && getData("options", sliderEl)
          ? JSON.parse(getData("options", sliderEl))
          : {};

      let slider = null;

      slider = new Flickity(sliderEl, options);

      const pageDots = select('.flickity-page-dots', sliderEl)
      if(pageDots) {
        const slideNumbers = selectAll('.js-slider-item', sliderEl).length
        const slideColumns = getData('columns', sliderEl)
        if (slideNumbers <= slideColumns) {
          addClass('hidden', pageDots)
        }
      }
    }, sliderEls);
  }
  
  if (toggleSubMenuEls) {
    map(toggleSubMenuEl => {
      toggleSubMenuEl.addEventListener('click', () => {
        for (let i = 0; i < toggleSubMenuEl.parentNode.childNodes.length; i++) {
          const content = toggleSubMenuEl.parentNode.childNodes[i]

            if (content.className === 'sub-menu js-sub-menu slideUp') {
              const innerContent = select('ul', content)
              innerContent.style.position = 'static'
              content.style.height = innerContent.offsetHeight + 'px'
              content.style.opacity = '1'
              content.classList.remove('slideUp')
              toggleSubMenuEl.classList.add('is-active')
            } else if (content.className === 'sub-menu js-sub-menu') {
              const innerContent = select('ul', content)
              innerContent.style.position = 'absolute'
              content.style.height = '0'
              content.style.opacity = '0'
              content.classList.add('slideUp')
              toggleSubMenuEl.classList.remove('is-active')
            }
        }
      })
    }, toggleSubMenuEls)
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => {
      removeClass('is-show', sliderMenuEl)
      iconOpenMenuEl.style.opacity = '1'
      body.style.overflow = 'auto'
      
      clearAllBodyScrollLocks()
    })
  }

  if (opentMenuBtn) {
    opentMenuBtn.addEventListener('click', () => {
      addClass('is-show', sliderMenuEl)
      iconOpenMenuEl.style.opacity = '0'
      body.style.overflow = 'hidden'

      disableBodyScroll(sliderMenuEl)
    })
  }
});

//js-tabs
jQuery(document).ready(function ($) {
  $("[research-data-tab]").click(function () {
    var tab = $(this).attr("research-data-tab");
    var data_tab = $('[research-data-tab = "' + tab + '"]');
    $("[research-data-tab]").removeClass("is-active");
    $(data_tab).addClass("is-active");
  });
  //
  $("[post-data-tab]").click(function () {
    var tab = $(this).attr("post-data-tab");
    var data_tab = $('[post-data-tab = "' + tab + '"]');
    $("[post-data-tab]").removeClass("is-active");
    $(data_tab).addClass("is-active");
  });
  //scroll top
  var screen_width = $(window).width();
  if (screen_width >= 1300) {
    $(window).scroll(function () {
      var y = $(window).scrollTop();
      if ((y > 700) && ( y < 4500)) {
        $(".banner-sticky").addClass("fix-img");
      } else {
        $(".banner-sticky").removeClass("fix-img");
      }
    });
  }
});
