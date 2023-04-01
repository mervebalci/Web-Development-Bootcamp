/*
API routes can also use dynamic routing like pages.
Use the `[]` syntax to create a dynamic API route, like `/pages/api/comments/[id].js` which will retrieve the comments specific to a post id.

Inside the `[id].js` you can retrieve the `id` value by looking it up inside the `req.query` object:
*/

import comments from 'comments.json'

export default function handler(req, res) {
  res.status(200).json({ post: req.query.id, comments })
}