const months = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "Jun.",
  "Jul.",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec.",
];

export function formatDateString(dateString) {
  var date = new Date(dateString);
  var formattedDateString = `${months[date.getMonth()]} ${date.getFullYear()}`;
  return formattedDateString;
}
