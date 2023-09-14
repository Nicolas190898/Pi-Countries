const getActivitiesHandler = (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Obtiene un arreglo de objetos, donde cada objeto es una actividad turística"
      );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createActivitesHandler = (req, res) => {
  const {name,location} = req.body
  try {
    res.status(200).send(`Actividad ${name} de ${location} es muy conocida actualmente`);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getActivitiesHandler, createActivitesHandler };
