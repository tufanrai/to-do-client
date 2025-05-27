import bcryptjs from "bcryptjs";

// hash password
export const hasPass = async (password: string) => {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
};

// compare password
export const comPass = (password: string, hash: string) => {
  return bcryptjs.compare(password, hash);
};
