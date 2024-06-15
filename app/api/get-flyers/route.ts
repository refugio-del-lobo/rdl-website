// pages/api/getFlyers.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { join } from 'path';
import { readdirSync, statSync } from 'fs';

const getFilePaths = (dir: string, baseDir = ''): string[] => {
  let results: string[] = [];
  const list = readdirSync(dir);

  list.forEach(file => {
    const filePath = join(dir, file);
    const relativePath = join(baseDir, file);
    const stat = statSync(filePath);

    if (stat && stat.isDirectory()) {
      // Recursively add files from subdirectories
      results = results.concat(getFilePaths(filePath, relativePath));
    } else {
      // Add the file path to the results array
      results.push(relativePath);
    }
  });

  return results;
};

export function GET(req: NextApiRequest, res: NextApiResponse) {
  const directoryPath = join(process.cwd(), 'public/assets/images/flyers-rdl');
  const flyers = getFilePaths(directoryPath).map(file => `/assets/images/flyers-rdl/${file}`);

  res.json({ flyers: flyers });
};

// export default handler;
