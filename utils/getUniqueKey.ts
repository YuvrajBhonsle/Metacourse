/**
 *
 * @returns A Timestamp based unique key in string form
 */

export default function getUniqueKey(): string {
  const timestamp = Date.now().toString(36);
  const randomNum = Math.random().toString(36).slice(2);
  //   console.log(`${timestamp}-${randomNum}`);
  return `${timestamp}-${randomNum}`;
}
