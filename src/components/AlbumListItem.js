import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./PhotoList";
import { GoTrash } from "react-icons/go";
import { CircularProgress } from "@mui/material";
import { useRemoveAlbumMutation } from "../store";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const handleClick = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <button style={{ marginRight: "30px", cursor: "pointer" }}>
        {results.isLoading ? (
          <CircularProgress style={{ width: "13px", height: "13px" }} />
        ) : (
          <GoTrash onClick={handleClick} />
        )}
      </button>
      {album.title}
    </>
  );
  return (
    <div>
      <ExpandablePanel header={header}>
        <PhotoList album={album} />
      </ExpandablePanel>
    </div>
  );
}

export default AlbumListItem;
