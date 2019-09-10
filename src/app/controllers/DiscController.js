import { Op } from "sequelize";
import Disc from "../models/Disc";

class DiscController {
  async store(req, res) {
    let name = "",
      path = "";

    if (req.file) {
      name = req.file.originalname;
      path = req.file.filename;
    }

    const disc = await Disc.create(
      {
        name: req.body.name,
        artist: req.body.artist,
        year: req.body.year,
        info: req.body.info,
        DiscFile: {
          name,
          path
        }
      },
      {
        include: Disc.DiscFile
      }
    );

    res.json(disc);
  }

  async getDiscById(req, res) {
    const { id } = req.params;

    const disc = await Disc.findByPk(id, {
      include: Disc.DiscFile
    });

    res.json(disc);
  }

  async getDiscs(req, res) {
    const disc = await Disc.findAll({ include: Disc.DiscFile });

    res.json(disc);
  }

  async getDiscByText(req, res) {
    const { text } = req.params;

    const discs = await Disc.findAll({
      where: {
        name: {
          [Op.like]: `%${text}%`
        }
      },
      include: Disc.DiscFile
    });

    res.json(discs);
  }

  async update(req, res) {
    const { id } = req.body;

    if (!id) {
      return res.status(404).json({ error: "Disc not found" });
    }

    const result = await Disc.update(req.body, {
      where: { id },
      include: Disc.DiscFile
    });

    res.json(result);
  }

  async delete(req, res) {
    const { id } = req.params;

    const [, discs] = await Promise.all([
      Disc.destroy({ where: { id } }),
      Disc.findAll({ include: Disc.DiscFile })
    ]);
    res.json(discs);
  }
}

export default new DiscController();
