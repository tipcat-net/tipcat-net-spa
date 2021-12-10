export const config = (token, contentTypes) => {
  const result = {
    headers: {},
  };

  if (token) {
    result.headers = {
      ...result.headers,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }

  if (contentTypes) {
    result.headers = {
      ...result.headers,
      'Content-Type': contentTypes,
    };
  }

  return result;
};
