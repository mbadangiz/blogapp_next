export default async function fetchGet(path: string, header?: RequestInit) {
  const url = process.env.NEXT_PUBLIC_API_URL + path;
  const fetching = await fetch(url, { ...header });
  return await fetching.json();
}
