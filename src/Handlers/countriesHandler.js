const { getAllCountries } = require("../controllers/countriesController");

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const countries = name
      ? await getAllCountries({ name })
      : await getAllCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getCountriesIdHandler = (req, res) => {
  const { id } = req.params;
  try {
    res
      .status(200)
      .send(
        `Ruta donde obtiene el detalle de un país especifico en este caso : ${id}`
      );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getCountriesHandler, getCountriesIdHandler };
