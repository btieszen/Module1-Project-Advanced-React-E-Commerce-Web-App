1.  To run cd ecommerce-project
2.  npm run dev
3.  This is a Product catalog
4.  It uses react,react query, ts
5.  In components is the nav bar, this sets up the navigtion bar
6.  In context folder there are 2 files CartContext and ProductContext
7.  The cart context set up the commands for what happens in the cart, add to cart, remove from cart and clear cart
8.  The Product catalog sets up the commands for the Products and selected catagories
9.  In The pages folder are Cart,Home,product card
10.  The cart file set up hoe the cart will be dis[played and is redirected to when the art button is clicked.  It has a total amount, remove item and clear cart
11.  The home set up the home page and selecte catagoriey
12.  the product card sets uop how each individual product will lock
13.  it has a types folder to identify the components in the api
14.  and css for styling

Github folder-uses Ci/Cd to push app into githup
has test folder to test pages for errors
push app to Vercel to make app on the web







































# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
"# commerce1" 
