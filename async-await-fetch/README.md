```js
try {
  const res = await fetch('/users')
  if (!res.ok) {
    throw new Error('Bad response', {
      cause: {
        res,
      }
    }
  }
} catch (err) {
  switch (err.cause.res?.status) {
     case 400: break;
     case 401: break;
     case 404: break;
     case 500: break;
  }
  handle(err)
  throw err
}

```
