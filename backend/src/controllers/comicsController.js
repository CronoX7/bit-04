const ComicModel = require("../models/comicsModel");

const ComicsController = {
  createComic: async (request, response) => {
    try {
      const {
        pubHouse,
        name,
        mainCharacter,
        storyArc,
        numPages,
        cover,
        format,
        price,
        imgComic,
      } = request.body;
      const newComics = new ComicModel({
        pubHouse,
        name,
        mainCharacter,
        storyArc,
        numPages,
        cover,
        format,
        price,
        imgComic,
      });
      const createdComic = await newComics.save();
      if (createdComic) {
        response.json({ createdComic: createdComic._id });
      } else {
        throw new Error("Comic wasn't create.");
      }
    } catch (error) {
      response.json({ error: "Error. You can't create the comic" });
    }
  },

  readComics: async (request, response) => {
    try {
      const allComics = await ComicModel.find();
      response.json({ allComics });
    } catch (error) {
      response.json({ message: "Fail during read all comics!" });
    }
  },
  readComic: async (request, response) => {
    try {
      const comic = await ComicModel.findById(request.params.id);
      if (comic) response.json({ comic });
      else response.json({message: "comic not found."});
    } catch (error) {
      console.log(error);
      response.json({ message: "Fail during read comic!" });
    }
  },
  updateComic: async (request, response) => {
    try {
      const comicUpdate = await ComicModel.findByIdAndUpdate(
        request.params.id,
        request.body
      );

      if (comicUpdate) response.json({ comicUpdate: comicUpdate._id });
      else throw new Error("comic not found.");
    } catch (error) {
      console.log(error);
      response.json({ error: error.message || "Fail during update comic!" });
    }
  },
  deleteComic: async (request, response) => {
    try {
      const comicDelete = await ComicModel.findByIdAndDelete(request.params.id); 
      if (comicDelete)
        response.json({
          comicDelete: comicDelete._id,
        }); 
      else throw new Error("comic not found."); 
    } catch (error) {
      response.json({ error: error.message || "Fail during delete comic!" });
    }
  },
};

module.exports = ComicsController;
