import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
NextResponse;

export default async function handler() {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  //Return the content of the data file in json format
  NextResponse.json(fileContents);
}
