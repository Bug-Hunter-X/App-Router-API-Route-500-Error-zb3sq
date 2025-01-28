```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This is a Next.js API route that returns an error when using the new App Router
  res.status(500).json({ error: 'Internal Server Error' });
}
```