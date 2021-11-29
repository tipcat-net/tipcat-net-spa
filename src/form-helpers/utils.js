export const ContentTypes = {
  JSON: 'application/json',
  MPFD: 'multipart/form-data',
}

const createFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (typeof data[key] !== 'undefined' && Array.isArray(data[key])) {
      data[key].forEach((item) => {
        formData.append(key, item);
      });
    } else if (typeof data[key] !== 'undefined') {
      formData.append(key, data[key]);
    }
  });
  return formData;
}

export const getBody = (data, type) => {
  if (!data) return data;

  switch (type) {
    case ContentTypes.JSON:
      return JSON.stringify(data);
    case ContentTypes.MPFD:
      return createFormData(data);
    default:
  }

  return false;
};
