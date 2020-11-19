/**
 * randomString
 *
 * Generates a short, random string.
 * Good for things like appending a unique
 * string to an HTML id, where it's quite unlikely
 * there will be a collision in a single webpage.
 *
 * @note This is not collision-safe.
 *
 * @return {string}
 *
 * @see https://gist.github.com/6174/6062387
 */
export function randomString() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
