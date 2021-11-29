export const ContentTypes = {
  JSON: 'application/json',
  MPFD: 'multipart/form-data',
}

export const getBody = (data, type) => {
  if (!data) return data;
  switch (type) {
    case ContentTypes.JSON:
      return JSON.stringify(data);
    case ContentTypes.MPFD:
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (typeof data[key] !== 'undefined') {
          switch (true) {
            case Array.isArray(data[key]):
              data[key].forEach((item) => {
                formData.append(key, item);
              });
              break;
            default:
              formData.append(key, data[key]);
          }
        }
      });
      return formData;
    default:
  }

  return false;
};
