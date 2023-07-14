export const BaseURL = 'https://dev.agristroom.com/api/api';

export const formatDate = (dateString:string) => {
    const dt = new Date(dateString).getDate()
    const mnth = new Date(dateString).getMonth() + 1;
    const yr = new Date(dateString).getFullYear()
    const date = `${dt}/${mnth}/${yr}`
    return date;
  };
export  const formatDateToTime = (dateString:string) => {
    const time = new Date(dateString)
    return time.toTimeString().split(":").join(":").slice(0,5);
  };