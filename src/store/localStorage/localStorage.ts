export const setJWTToken = (value: string) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("token", value);
};

export const getJWTToken = () => {
  if (typeof window === "undefined") return undefined;
  // "" , null 모두 undefined로 통일해서 리턴을 위함
  const token = localStorage.getItem("token");
  return !token ? undefined : token;
};

export const removeJWTToken = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
};

export const setInterViewTime = (value: string) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("interviewTime", value);
};

export const getInterViewTime = () => {
  if (typeof window === "undefined") return undefined;
  // "" , null 모두 undefined로 통일해서 리턴을 위함
  const token = localStorage.getItem("interviewTime");
  return !token ? undefined : token;
};

export const removeInterViewTime = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("interviewTime");
};
