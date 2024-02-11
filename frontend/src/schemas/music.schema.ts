import * as yup from "yup";

const supportedImages = ["image/jpeg", "image/png", "image/jpg"];

const validateImage = (image: File) => {
  if (image && image instanceof FileList) {
    const file = image[0];
    if (!supportedImages.includes(file.type)) {
      return false;
    }
  }
  return true;
};

const commonValidation = yup.object().shape({
  title: yup.string().required("Title is required"),
  album: yup.string().required("Album name is required"),
  genre: yup.string().required("Genre is required"),
  artist: yup.string().required("Artist name is required"),
});

export const createMusicSchema = commonValidation.shape({
  image: yup
    .mixed<File>()
    .test("fileType", "Invalid image format", (value) =>
      validateImage(value as File)
    )
    .required("Image is required for creation"),
});

export const updateMusicSchema = commonValidation.shape({
  image: yup
    .mixed<File>()
    .test("fileType", "Invalid image format", (value) => {
      if (value instanceof FileList && value.length > 0) {
        return validateImage(value as File);
      }
      return true;
    }),
});
