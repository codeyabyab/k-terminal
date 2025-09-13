import { getBio } from '../../api';

export const about = async (_args) => {
  const bio = await getBio();

  return bio;
};
