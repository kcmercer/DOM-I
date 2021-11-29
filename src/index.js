const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const logoImg = document.querySelector('#logo-img')
logoImg.src = siteContent.images['logo-img'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.images['cta-img'];

const accentImg = document.querySelector('#middle-img');
accentImg.src = siteContent.images['accent-img'];









// Variables for HTML creation

// const navItem1 = document.querySelector('.nav-item-1');
// const navItem2 = document.querySelector('.nav-item-2');
// const navItem3 = document.querySelector('.nav-item-3');
// const navItem4 = document.querySelector('.nav-item-4');
// const navItem5 = document.querySelector('.nav-item-5');
// const navItem6 = document.querySelector('.nav-item-6');

// const ctah1 = document.querySelector('.h1');
// const ctabutton = document.querySelector('.button');

// const featuresH4 = document.querySelector('.features-h4');
// const featuresContent = document.querySelector('features-content');
// const aboutH4 = document.querySelector('.about-h4');
// const aboutContent = document.querySelector('.about-content');
// const servicesH4 = document.querySelector('.services-h4');
// const servicesContent = document.querySelector('.services-content');
// const productH4 = document.querySelector('.product-h4');
// const productContent = document.querySelector('.product-content');
// const visionH4 = document.querySelector('.vision-h4');
// const visionContent = document.querySelector('visionContent');

// const contactH4 = document.querySelector('.contact-h4');
// const address = document.querySelector('.address');
// const phone = document.querySelector('.phone');
// const email = document.querySelector('.email');

// const copyright = document.querySelector('.copyright');

// const logoImg = document.querySelector('.logo-img');
// const ctaImg = document.querySelector('.cta-img');
// const accentImg = document.querySelector('.accent-img');

// Filling in the variables with data

// navItem1.textContent = siteContent['nav']['nav-item-1'];
// navItem2.textContent = siteContent['nav']['nav-item-2'];
// navItem3.textContent = siteContent['nav']['nav-item-3'];
// navItem4.textContent = siteContent['nav']['nav-item-4'];
// navItem5.textContent = siteContent['nav']['nav-item-5'];
// navItem6.textContent = siteContent['nav']['nav-item-6'];

// ctah1.textContent = siteContent['cta']['h1'];
// ctabutton.textContent = siteContent['cta']['button'];

// featuresH4.textContent = siteContent['main-content']['features-h4'];
// featuresContent.textContent = siteContent['main-content']['features-content'];
// aboutH4.textContent = siteContent['main-content']['about-h4'];
// aboutContent.textContent = siteContent['main-content']['about-content'];
// serviesH4.textContent = siteContent['main-content']['services-h4'];
// servicesContent.textContent = siteContent['main-content']['services-content'];
// productH4.textContent = siteContent['main-content']['product-h4'];
// productContent.textContent = siteContent['main-content']['product-content'];
// visionH4.textContent = siteContent['main-content']['vision-h4'];
// visionContent.textContent = siteContent['main-content']['vision-content'];

// contactH4.textContent = siteContent['contact']['contact-h4'];
// address.textContent = siteContent['contact']['address'];
// phone.textContent = siteContent['contact']['phone'];
// email.textContent = siteContent['contact']['email'];

// copyright.textContent = siteContent['footer']['copyright'];

// logoImg.textContent = siteContent['images']['logo-img'];
// ctaImg.textContent = siteContent['images']['cta-img'];
// accentImg.textContent = siteContent['images']['accent-img'];

// // HTML Creation
// document.querySelector('nav').appendChild(navItem1);
// document.querySelectorAll('nav a').classList.add('Italic');