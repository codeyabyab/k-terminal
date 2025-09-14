import { getBio } from '../../api';

export const about = async () => {
  const bio = await getBio();

  return bio;
};
