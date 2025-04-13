import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      // 定位 JSON 文件
      const filePath = path.join(
        process.cwd(),
        'public/assets/data',
        'links.json'
      );
      const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      // 返回 JSON 数据
      res.status(200).json(jsonData.data);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);

    res.status(500).json({ message: 'Internal Server Error' });
  }
}
