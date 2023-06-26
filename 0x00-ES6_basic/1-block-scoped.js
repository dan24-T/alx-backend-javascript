export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;//comment 1
    const task2 = false;//comment 2
  }

  return [task, task2];
}
