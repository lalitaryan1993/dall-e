import FileSaver from 'file-saver';
import { surpriseMePrompts } from './../constants/index';

export const getRandomPrompt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * prompt.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomIndex === prompt) return getRandomPrompt[prompt];

  return randomPrompt;
};

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
