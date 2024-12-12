import { parse } from 'csv-parse/sync';
import fs from 'fs/promises';

export interface Job {
  id: string;
  title: string;
  salary: string;
  expiry: string;
  keySkills: string[];
  roleCategory: string;
  location: string;
  functionalArea: string;
  industry: string;
}

export async function parseJobsCSV(): Promise<Job[]> {
  const fileContent = await fs.readFile('jobs.csv', 'utf-8');
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });

  return records.map((record: any) => ({
    ...record,
    keySkills: record.keySkills.split(',').map((skill: string) => skill.trim()),
  }));
}

