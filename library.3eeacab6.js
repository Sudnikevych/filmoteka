var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var i=r("krGWQ"),d=r("9OFk8"),o=r("f6zZF"),a=r("jFP6o");function c(){f(i.refs.watchedBtn,i.refs.queueBtn),s("watched"),(0,a.initModal)()}function f(e,n){e.classList.add("active"),n.classList.remove("active")}function s(e){const n=(0,d.getSavedMovies)(e);(0,o.createAndRenderMarkup)(n)}r("jJBTH"),r("gScR6"),r("8Yq9A"),r("6mHu7"),i.refs.watchedBtn.addEventListener("click",c),i.refs.queueBtn.addEventListener("click",(function(){f(i.refs.queueBtn,i.refs.watchedBtn),s("queue"),(0,a.initModal)()})),c();
//# sourceMappingURL=library.3eeacab6.js.map