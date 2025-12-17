const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return ""; // 브라우저: 상대 경로
  }
  return "http://localhost:5173"; // SSR: 절대 경로 (MSW가 매칭)
};

export default getBaseUrl;
