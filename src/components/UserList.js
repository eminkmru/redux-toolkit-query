import React from "react";
import { useFetchUsersQuery } from "../store";
import { CircularProgress, Skeleton } from "@mui/material";
import UsersListItem from "./UsersListItem";

function UserList() {
  const { data, isError, isFetching } = useFetchUsersQuery();

  let content;
  if (isFetching) {
    content = <Skeleton sx={{ width: "100%", height: "600px" }} />;
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return <div> {content} </div>;
}

export default UserList;
