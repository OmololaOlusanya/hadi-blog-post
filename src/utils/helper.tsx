export const fetchPost = async () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${baseURL}/json/blog-posts.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

export const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const formattedDate = `${months[date.getMonth()]} ${date
    .getDate()
    .toString()
    .padStart(2, '0')}, ${date.getFullYear()}`;

  return formattedDate;
};
