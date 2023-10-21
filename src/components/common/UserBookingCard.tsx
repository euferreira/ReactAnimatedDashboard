import { Avatar, Box, Stack, Typography, colors } from "@mui/material";
import MPaper from "./MPaper";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { images } from "../../assets";

export default function UserBookingCard() {
  return (
    <MPaper title="Latest booking" fullHeight>
      <Stack spacing={3}>
        {/* user info */}
        <Stack direction="row" spacing={2}>
          <Avatar alt="user" src={images.logo} />
          <Stack justifyContent="space-between">
            <Typography variant="subtitle2">Tuat Tran</Typography>
            <Typography variant="caption" color={colors.grey[500]}>
              02 Sep 2023 09:50
            </Typography>
          </Stack>
        </Stack>
        {/* user info */}

        {/* booking info */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={5}
          sx={{ color: colors.grey[600] }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <CalendarMonthOutlinedIcon fontSize="small" />
            <Typography variant="body2" fontWeight={600}>
              5 days 4 nights
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PeopleAltOutlinedIcon fontSize="small" />
            <Typography variant="body2" fontWeight={600}>
              5 - 6 guests
            </Typography>
          </Stack>
        </Stack>
        {/* booking info */}

        {/* image */}
        <Box
          sx={{
            pt: "100%",
            position: "relative",
            "& img": {
              position: "absolute",
              top: 0,
              height: "100%",
              width: "100%",
              borderRadius: 8,
            },
          }}
        >
          <img src={images.logo} alt="booking" />
        </Box>
        {/* image */}
      </Stack>
    </MPaper>
  );
}
