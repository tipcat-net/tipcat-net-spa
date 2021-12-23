export const config = (token, contentTypes, params) => {
  const result = {
    headers: {},
    params: {},
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

  if (params) {
    result.params = {
      ...result.params,
      ...params,
    };
  }

  return result;
};
