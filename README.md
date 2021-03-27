# NextJS Sandbox

A NextJS project to practice all things NextJS.

## Fundamentals

### Routing

Page file names must be lowercase.

```javascript
import Link from 'next/link';

<Link href="/">Home</Link>;
```

### Styling

In styles folder, add ComponentName.module.css file, import into component, use as className="styles.container".

```javascript
import styles from '../styles/Layout.module.css';

<div className={styles.someClassName}>Hello</div>;
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

### Data Fetching

#### getStaticProps

Allow to fetch at build time

#### getServersideProps

Get data on every request

#### getStaticPaths

Dynamically generate paths depending on data you're fetching
