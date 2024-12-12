import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const t = searchParams.get('t');
  const tag = searchParams.get('tag');
  const catagory = searchParams.get('catagory');
  const level = searchParams.get('level');

  const csvFilePath = path.resolve('./data/Courses_udemy.csv');
  const output = [];

  try {
    const data = await new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(csvFilePath)
        .pipe(csvParser())
        .on('data', (row) => {
          results.push(row);
        })
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => {
          reject(error);
        });
    });

    const limit = t ? parseInt(t, 10) : data.length;
    const filteredData = data.slice(0, limit).map((row) => ({
      id: row.id,
      title: row.title,
      url: row.url,
      duration: row.duration,
      tag: row.tag,
      catagory: row.catagory,
      level: row.level,
    }));

    let outputToReturn = filteredData;

    if (tag) {
      outputToReturn = outputToReturn.filter((item) =>
        item.tag.toLowerCase().includes(tag.toLowerCase())
      );
    }

    if (catagory && level) {
      outputToReturn = outputToReturn.filter(
        (item) =>
          item.catagory.toLowerCase().includes(catagory.toLowerCase()) &&
          item.level.toLowerCase().includes(level.toLowerCase())
      );
    }

    return new Response(JSON.stringify({ data: outputToReturn }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Failed to process data' }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
}
