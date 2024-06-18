/**
 * Returns a string representing the time ago from the provided date.
 *
 * @param {Date} providedDate - The date to format.
 * @returns {string} - The formatted time ago string.
 */
function returnDateAsTimeAgoString(providedDate: Date): string {
  const providedDateTyped =
    typeof providedDate === "string" ? new Date(providedDate) : providedDate;

  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - providedDateTyped.getTime()) / 1000
  );

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}d`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks}w`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths}m`;
  }

  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears}y`;
}

export { returnDateAsTimeAgoString };
