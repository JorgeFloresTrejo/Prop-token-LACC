export async function POST(request, response) {
  const formData = request.body;
  console.log(formData);
  return response.json("imagen subida");
}
