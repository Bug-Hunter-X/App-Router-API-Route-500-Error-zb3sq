```javascript
// app/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from App Router API!' });
}
```