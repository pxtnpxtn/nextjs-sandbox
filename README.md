# NextJS Sandbox

A NextJS project to practice all things NextJS.

## Fundamentals

### Routing

Page file names must be lowercase.

### Styling

In styles folder, add ComponentName.module.css file, import into component, use as className="styles.container".

```javascript
import styles from '../styles/Layout.module.css';

<div className="styles.someClassName">Hello</div>;
```

### Head

Allows for custom meta data in the header.

```javascript
import Head from 'next/head';
```

```javascript
<Head>
  <title>NextJS Sandbox</title>
  <link rel="icon" href="/favicon.ico" />
  <meta name="keywords" content="learn next, web development" />
</Head>
```
