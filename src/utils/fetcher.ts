const fetcher = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const res = await fetch(input, init);
  return res.json();
};

export default fetcher;
