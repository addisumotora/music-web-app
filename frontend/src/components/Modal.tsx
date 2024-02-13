import styled from "@emotion/styled";
import { Music } from "../types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { createMusicSchema, updateMusicSchema } from "../schemas/music.schema";
import { RootState } from "../features/store";
import { closeModal } from "../features/modal/modalSlice";
import { IoCloseOutline } from "react-icons/io5";
import {
  createMusicAction,
  setUpdate,
  updateMusicAction,
} from "../features/music/musicSlice";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: absolute;
  width: 100%;
  margin: auto;
  background-color: #000102;
  z-index: 90;
`;

const Card = styled.div`
  background-color: #14252f;
  border-radius: 6px;
  padding: 2rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 25vw;
  gap: 1rem;
`;
const FormHeader = styled.h1`
  color: white;
  font-size: 20px;
`;
const Input = styled.input`
  padding: 15px;
  border: 1px solid #3f5461;
  border-radius: 5px;
  background-color: #14252f;
  font-size: 16px;
  color: #a3a3a3;
  &:focus {
    border-color: #009688;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 15px;
  color: white;
  border-radius: 10px;
  background-color: #009688;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.6" : "1")};
`;

const Error = styled.span`
  color: #ef4444;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    div{
      display: flex;
      flex-direction: column;
    }
  }
`


const FormModal = () => {
  const { loading, music, isUpdate } = useSelector(
    (state: RootState) => state.musicReducer
  );
  const { isOpen } = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Music>({
    resolver: yupResolver(
      isUpdate ? (updateMusicSchema as any) : createMusicSchema
    ),
  });

  useEffect(() => {
    if (isUpdate && music) {
      Object.keys(music).forEach((key) => {
        if (key !== "image") {
          setValue(key as keyof Music, music[key as keyof Music]);
        }
      });
    } else {
      reset(); 
    }
  }, [isUpdate, music, setValue]);

  const convertBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onSubmit: SubmitHandler<Music> = async (music: Music) => {
    try {
      const hasImage =
        music.image instanceof FileList && music.image.length > 0;
      if (isUpdate && !hasImage) {
        dispatch(updateMusicAction({ ...music, id: music._id, image: null }));
      } else if (!music.image || !(music.image instanceof FileList)) {
        console.error("No image selected");
        return;
      } else {
        const file = music.image[0];
        const imageBase64 = await convertBase64(file);
        const updatedMusic: Music = {
          ...music,
          image: imageBase64 as unknown as File,
        };
        if (isUpdate) {
          dispatch(updateMusicAction({ id: music._id, ...updatedMusic }));
        } else {
          dispatch(createMusicAction(updatedMusic));
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };

  return (
    <>
      {isOpen && (
        <Container>
          <Card>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FormHeader>Create Music</FormHeader>
                <div
                  onClick={() => {
                    dispatch(closeModal());
                    dispatch(setUpdate(false));
                  }}
                >
                  {" "}
                  <IoCloseOutline size={30} cursor={"pointer"} />
                </div>
              </div>
              <InputContainer>
                {isUpdate && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <img
                      src={music?.image}
                      alt="Current Image"
                      style={{
                        width: "10rem",
                        height: "100%",
                        marginBottom: "1rem",
                      }}
                    />

                    <input
                      id="image"
                      type="file"
                      height="50%"
                      {...register("image")}
                      style={{
                        border: "1px solid #3f5461",
                        borderRadius: "5px",
                        padding: "10px",
                        marginBottom: "10px",
                      }}
                      multiple
                    />
                  </div>
                )}
                {!isUpdate && (
                  <Input
                    id="image"
                    type="file"
                    {...register("image")}
                    required
                    multiple
                  />
                )}
                {errors.image && <Error>{errors.image.message}</Error>}
                <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        margin: "1rem 0",
                      }}
                    >
                      <Input
                        type="text"
                        id="title"
                        placeholder="Title"
                        {...register("title")}
                      />
                      {errors.title && <Error>{errors.title.message}</Error>}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        margin: "1rem 0",
                      }}
                    >
                      <Input
                        type="text"
                        id="genre"
                        placeholder="genre"
                        {...register("genre")}
                      />
                      {errors.genre && <Error>{errors.genre.message}</Error>}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        margin: "1rem 0",
                      }}
                    >
                      <Input
                        type="text"
                        id="album"
                        placeholder="album"
                        {...register("album")}
                      />
                      {errors.genre && <Error>{errors.genre.message}</Error>}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        margin: "1rem 0",
                      }}
                    >
                      <Input
                        type="text"
                        id="artist"
                        placeholder="artist"
                        {...register("artist")}
                      />
                      {errors.genre && <Error>{errors.genre.message}</Error>}
                    </div>
                  </div>
                </div>
              </InputContainer>
              <Button type="submit" disabled={loading}>
                {loading? isUpdate ? "Updating..." : "Creating...": isUpdate? "Update Music": "Create Music"}
              </Button>
            </FormContainer>
          </Card>
        </Container>
      )}
    </>
  );
};
export default FormModal;
