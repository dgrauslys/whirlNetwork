export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export const convertToStandardTime = (militaryTime) => {
  const timeParts = militaryTime.split(":");
  const hours = parseInt(timeParts[0], 10);
  const minutes = timeParts[1];

  const suffix = hours >= 12 ? "PM" : "AM";
  const standardHours = ((hours + 11) % 12) + 1; // Converts hour to standard time

  return `${standardHours}:${minutes} ${suffix}`;
};


