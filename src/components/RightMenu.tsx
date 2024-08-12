import {
  Box,
  Avatar,
  Typography,
  Divider,
  TextField,
  Paper,
} from "@mui/material";
import FriendsRequest from "./FriendsRequest";
import Birthdays from "./Birthdays";
import Ads from "./Ads";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

export default function RightMenu({ userId }: { userId?: String }) {
  return (
    <Box display="flex" flexDirection="column" gap={2.5}>
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendsRequest></FriendsRequest>
      <Birthdays></Birthdays>
      <Ads size="md"></Ads>
    </Box>
  );
}
