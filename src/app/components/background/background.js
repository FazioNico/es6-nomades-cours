export class Background {
  constructor({root}) {
    this.root = root;
    this.loadBg()
  }

  loadBg()  {
    fetch('https://api.unsplash.com/photos/random?count=1&client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029')
    .then(res => res.json())
    .then(dataObj => {
      console.log(dataObj[0].urls.regular)
      document.querySelector(this.root + ' h1').insertAdjacentHTML('afterend', `
        <img src="${dataObj[0].urls.small}">
      `);
      return dataObj;
    })
    .then(dataObj => {
      document.body.style.color = `red`;  
      document.body.style.background = `
        url(${dataObj[0].urls.regular}) center center no-repeat
      `;
      document.body.style.backgroundSize = 'cover';
      return dataObj;
    })
  }
}