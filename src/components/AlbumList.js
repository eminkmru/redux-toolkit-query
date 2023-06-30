import React from "react";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import { Button, CircularProgress, Skeleton } from "@mui/material";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, result] = useAddAlbumMutation();

  const handleAlbumAdd = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "300px" }} />
    );
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }
  return (
    <>
      <div>
        <div className="topArrangment">
          <h3> {user.name} </h3>
          <Button variant="outlined" onClick={handleAlbumAdd}>
            {result.isLoading ? <CircularProgress /> : <span>Albüm Ekle+</span>}
          </Button>
        </div>
      </div>
      <div> {content} </div>
    </>
  );
}

export default AlbumList;
