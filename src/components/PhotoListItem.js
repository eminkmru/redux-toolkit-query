import React from "react";
import { useRemovePhotoMutation } from "../store";
import { CircularProgress } from "@mui/material";
import { GoTrash } from "react-icons/go";

function PhotoListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation(photo);

  const handleClick = () => {
    removePhoto(photo);
  };
  return (
    <>
      <img src={photo.url} alt="" />
      {results.isLoading ? (
        <CircularProgress style={{ width: "13px", height: "13px" }} />
      ) : (
        <GoTrash onClick={handleClick} />
      )}
    </>
  );
}

export default PhotoListItem;
