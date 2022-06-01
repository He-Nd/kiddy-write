import Tesseract, { createWorker, PSM } from "tesseract.js";

export async function recognizeText(img) {
  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  await worker.setParameters({
    tessedit_pageseg_mode: PSM.SINGLE_LINE,
  });
  const { data } = await worker.recognize(img);
  worker.terminate();
  return data.text.trim();
}
