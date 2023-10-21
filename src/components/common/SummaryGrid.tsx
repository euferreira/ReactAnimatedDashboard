import { Box, Grid, Stack, Typography, colors } from "@mui/material";
import Animate from "./Animate";
import MPaper from "./MPaper";

const summaryData = [
  {
    title: "Total Booking",
    value: "714k",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Sold",
    value: "311k",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Canceled",
    value: "122k",
    image: "https://via.placeholder.com/150",
  },
];

export default function SummaryGrid() {
  return (
    <Grid container spacing={3}>
      {summaryData.map((item, index) => (
        <Grid key={index} item xs={12} lg={4}>
            <Animate delay={(index + 1) / 3}>
                <MPaper fullHeight>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Stack spacing={1}>
                            <Typography variant="h4" fontWeight='bold'>
                                {item.value}
                            </Typography>
                            <Typography variant='body2' fontWeight='bold' color={colors.grey[600]}>
                                {item.title}
                            </Typography>
                        </Stack>
                        <Box sx={{
                            height: "100px",
                            width: "100px",
                            "& img": { width: "100%" }
                        }}>
                            <img src={item.image} alt={item.title} />
                        </Box>
                    </Stack>
                </MPaper>
            </Animate>
        </Grid>
      ))}
    </Grid>
  );
}
