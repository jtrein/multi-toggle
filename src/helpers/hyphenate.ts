/**
 * hyphenate
 *
 * Simple hyphentor.
 * Strips a string of spaces and leaves hyphens in their place.
 *
 * @param {string} data
 * @return {string}
 */
export function hyphenate(data: string) {
  return (
    data
      // Normalise
      .toLowerCase()
      .trim()
      // Strip spaces and one (or more) hypens and cleanly replace with a single hyphen.
      .replace(/[\s-]{1,}/g, "-")
      // Strip hyphens from beginning and end of string.
      .replace(/^-{1,}|-{1,}$/, "")
  );
}
