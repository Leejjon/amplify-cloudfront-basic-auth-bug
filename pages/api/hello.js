// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const {cookies} = req;
  res.status(200).json({cookies: cookies})
}
