export const formatDate = (dateStr: string) => {
  const dateObj = new Date(dateStr);

  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();

  const date = `${day}.${month}.${year}`;
  const isoDate = dateObj.toISOString();

  return { date, isoDate };
};
