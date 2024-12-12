import apiClient from './axiosConfig';

export const getUserDetails = async (userId) => {
  const response = await apiClient.get(`/users/${userId}`);
  return response.data;
};
