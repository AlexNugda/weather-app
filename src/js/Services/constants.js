export const formatDayName = (timestamp, format = 'long') => {
  return new Intl.DateTimeFormat('en-US', { weekday: format }).format(timestamp * 1000);
};

export const formatDate = (timestamp, options) => {
  return new Intl.DateTimeFormat('en-GB', options).format(timestamp * 1000);
};

export const formatTime = timestamp => {
  return new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: 'numeric' }).format(timestamp * 1000);
};
