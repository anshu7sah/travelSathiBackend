import { Destination } from "../models/Destination";
import { Request, Response } from "express";

export const getAllPlaces = async (req: Request, res: Response) => {
  const destinations = await Destination.find({});

  return res.status(200).json(destinations);
};

export const getSinglePlaces = async (req: Request, res: Response) => {
  const id = req.params.id;
  const destination = await Destination.findById(id);
  if (destination) {
    return res.status(200).json(destination);
  }
  return res.status(400).json({ message: "Place not found" });
};

// export const createPlaces = async (req: Request, res: Response) => {
//   const destination = new Destination({
//     SN: 0,
//     Place: "Manasalu",
//     City: "Gorkha",
//     District: "Gorkha",
//     Address: "Himalya, Mansiri Himal",
//     Interests: "Adventure",
//     Sector: "public",
//     Ticket: "100",
//     Nearby_Places: "Manaslu Circuit Trek",
//     Transportation: "Trekking",
//     Description:
//       "Manaslu, Nepal's eighth-highest peak at 8,163 meters, offers the stunn...",
//     Image:
//       "https://images.unsplash.com/photo-1611872110600-b619b39fa69d?ixlib=rb-...",
//     Rating: 3,
//     Summary:
//       "Journey to the Heart of the Himalayas: Embark on the Manaslu Circuit T...",
//   });
//   const newDat = await destination.save();
//   console.log(newDat);
//   return res.status(201).json(newDat);
// };
