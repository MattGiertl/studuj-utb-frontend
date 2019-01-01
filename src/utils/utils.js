export const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

export const isIphoneXDisplay = () => {
  const ratio = window.devicePixelRatio || 1;
  const screen = {
    width: window.screen.width * ratio,
    height: window.screen.height * ratio,
  };

  return screen.width === 1125 && screen.height === 2436;
};

export const isInStandaloneMode = () => {
  const standaloneIos = window.navigator.standalone === true;
  const standaloneOther = window.matchMedia('(display-mode: standalone)')
    .matches;

  return standaloneIos || standaloneOther;
};
