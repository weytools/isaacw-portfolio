# Personal Portfolio Site   
Hosted on GitHub, deployed on Netlify  
  
[www.isaacw.xyz](https://www.isaacw.xyz/)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/3679bb2d-ba84-4c21-a4a8-ab855ef44e20/deploy-status)](https://app.netlify.com/sites/inspiring-nobel-b162cb/deploys)  

### Scripts
- Projects are populated in the [`projects.js`](./scripts/projects.js) module
  - Pulls data from [`projects.json`](./data/projects.json)
- Functions are imported and executed from [`controller.js`](./scripts/controller.js)
- **Animations** and event handlers are defined in the [`animations.js`](./scripts/animations.js) module

### Styling
- Uses **Bootstrap** as a style base for components and css utilities
- Custom classes built in **Sass** *(Sassy CSS format)*
   - Compiled [`style.css`](./styles/style.css) file contains customs *and* bootstrap 
   - View the **pre-processed Sass** in [`/sass/custom.scss`](./sass/custom.scss)  
  
  
Please see my [CatSim repo](https://github.com/weytools/react-cat-sim) for React specific project notes
