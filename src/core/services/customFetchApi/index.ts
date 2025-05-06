export default async function customFetchApi(
  path: string,
  header?: RequestInit,
) {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL + path;
    const response = await fetch(url, { ...header });
    const data = await response.json();

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error("Bad Request (400)");
      } else if (response.status === 401) {
        throw new Error("Unauthorized (401)");
      } else if (response.status === 404) {
        throw new Error("Not Found (404)");
      } else if (response.status === 500) {
        throw new Error("Server Error (500)");
      } else {
        throw new Error(`Unexpected error: ${response.status}`);
      }
    }

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("خطایی رخ داده است.");
  }
}
