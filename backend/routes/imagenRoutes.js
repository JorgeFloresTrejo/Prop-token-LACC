export async function POST(request, response) {
  try {
    const data = await request.formData();
    response.status(200).json({ message: "Imagen subida" });
    console.log(data);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
}
