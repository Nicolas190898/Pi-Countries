const getCountriesHandler = (req, res) => {
  const { name } = req.query;
  try {
    if (name) res.status(200).send(`Ruta donde cada objeto es un país con su información en este caso ${name} `);
    else {
      res.status(200).send('todos los usuarios');
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getCountriesIdHandler = (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).send(`Ruta donde obtiene el detalle de un país especifico en este caso : ${id}`);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getCountriesHandler, getCountriesIdHandler };
