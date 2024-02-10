import * as yup from "yup";

const supportedImages = ["image/jpeg", "image/png","image/jpg"];

const validateImage = (image: File) => {
  if(image instanceof FileList) {
    const file = image[0];
    if (!supportedImages.includes(file.type)) {
      return false;
    }
  }
  return true;
};

export const musicSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  album: yup.string().required("Album name is required"),
  genre: yup.string().required("Genre is required"),
  image: yup
    .mixed<File>()
    .test("fileType", "Invalid image format", (value) => {
      return validateImage(value as File);
    })
    .required("Image is required"),

  artist: yup.string().required("Artist name is required"),
});
