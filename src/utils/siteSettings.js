export const changeFavIcon = (imageLink) => {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = imageLink;
};

export const changeSiteName = (title) => {
  document.title = title;
};
