import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
import { GoTrash } from "react-icons/go";
import { useRemoveUserMutation } from "../store";
import { CircularProgress } from "@mui/material";

function UsersListItem({ user }) {
  const [removeUser, results] = useRemoveUserMutation();
  const handleClick = () => {
    removeUser(user);
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
      {user.name}
    </>
  );
  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
}

export default UsersListItem;
