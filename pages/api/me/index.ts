export default async function (req, res) {
  const miNombre: string = "Marce";
  console.log("soy la api", miNombre);

  res.send(miNombre);
}
