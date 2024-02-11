import { Request, Response } from "express";
import cloudinary from "../cloudinary.config";
import Music from "../models/music";
import mongoose from "mongoose";

export const createMusic = async (req: Request, res: Response) => {
  try {
    const img = await cloudinary.uploader.upload(req.body.image, {
      upload_preset: "gojjo",
    });
    const newMusic = new Music({
      ...req.body,
      image: img.secure_url,
      createAt: Date.now(),
    });
    await newMusic.save();
    res.status(201).json(newMusic);
  } catch (error: any) {
    res.status(500).json({ message: "Internal serve error" });
  }
};
 
export const getMusics = async (req: Request, res: Response) => {
  try {
    const musics = (await Music.find()).reverse();
    res.status(200).json(musics);
  } catch (error) {
    res.status(404).json({ message: "no musics found" });
  }
};

export const updateMusic = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ message: `No music with id: ${id}` });

    let updatedMusic;
    if (req.body.image) {
      const newImage = await cloudinary.uploader.upload(req.body.image, {
        upload_preset: "gojjo",
      });
      updatedMusic = await Music.findByIdAndUpdate(
        id,
        { ...req.body, image: newImage.secure_url },
        { new: true }
      );
    } else {
      const updatedBody = { ...req.body };
      delete updatedBody.image;
      updatedMusic = await Music.findByIdAndUpdate(id, updatedBody, {
        new: true,
      }); 
    } 
    res.status(200).json(updatedMusic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const findbyId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try { 
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ message: `no music with id:${id}` });
    const music = await Music.findOne({ id });
    res.status(200).json(music);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}; 

export const deleteMusic = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `no music with id:${id}` });

  const musicToDelete = await Music.findById(id);

  if (!musicToDelete) {
    return res.status(404).json({ message: `No music with id: ${id}` });
  }
  const publicIdMatch = musicToDelete.image.match(/\/([^/]+)\/?$/);
  const publicId = publicIdMatch && publicIdMatch[1];

  if (publicId) {
    await cloudinary.uploader.destroy(publicId);
  }

  await Music.findByIdAndDelete(id);
  res.status(204).json("music deleted successfuly");
};

export const filterByParameter = async (req: Request, res: Response) => {
  console.log(req.query.searchTerm?.toString())
  try {
    const searchTerm: string | undefined = req.query.searchTerm?.toString();
    if (!searchTerm) {
      return res.status(400).json({ message: "No search term provided" });
    }

    const musics = await Music.find({
      $or: [
        { artist: { $regex: new RegExp(searchTerm, "i") } },
        { genre: { $regex: new RegExp(searchTerm, "i") } },
        { title: { $regex: new RegExp(searchTerm, "i") } },
        { album: { $regex: new RegExp(searchTerm, "i") } },
      ],
    });

    res.status(200).json(musics);
  } catch (error) {
    console.error("Error in filterByParameter:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
