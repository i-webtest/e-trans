export const disabledScroll = () => {
  document.body.scrollPosition = window.scrollY;
  document.body.style.cssText = `
    overflow: hidden;
    position: fixed;
    top: -${document.body.scrollPosition}px;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding-right: ${window.innerWidth - document.body.offsetWidth}px;
  `;
};

export const enabledScroll = () => {
  document.body.style.cssText = '';
  window.scroll({ top: document.body.scrollPosition });
};
