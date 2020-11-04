import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = '../../data';

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}
