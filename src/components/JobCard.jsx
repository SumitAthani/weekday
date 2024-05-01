import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  Paper,
  Typography,
  Box,
  Button,
  AvatarGroup,
  Stack,
  styled,
  Badge,
} from "@mui/material";

import React from "react";

const JobCard = () => {
  let data = {
    jdUid: "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
    jdLink: "https://weekday.works",
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: null,
    minJdSalary: null,
    salaryCurrencyCode: null,
    location: "chennai",
    minExp: null,
    maxExp: null,
    jobRole: "tech lead",
  };

  return (
    <Paper
      elevation={5}
      style={{
        borderRadius: 20,
        maxWidth: 300,
        padding: 20,
      }}
    >
      <Box style={{ marginBottom: 20 }}>
        <Box
          style={{
            border: "solid",
            borderRadius: 20,
            width: "fit-content",
            padding: "1px 10px 1px 10px",
            marginBottom: 4,
            borderWidth: 1,
          }}
        >
          Posted a day ago
        </Box>
      </Box>
      <CardContent
        style={{
          padding: 0,
        }}
      >
        <Box>
          <div style={{ display: "flex" }}>
            <Avatar alt="Remy Sharp" variant="square" src="" />
            <Stack marginLeft={2}>
              <div
                style={{
                  marginBottom: "5px",
                  color: "#73797e",
                  fontWeight: "500",
                }}
              >
                <a href={data.jdLink} style={{}} target="_blank">
                  Companyname
                </a>
              </div>
              <div style={{ marginBottom: "5px" }}>{data.jobRole}</div>
              <div>{data.location}</div>
            </Stack>
          </div>
        </Box>
        <Stack>
          <Typography variant="h8" color="initial" marginTop="10px">
            Estimated salary: $15 - $25 LPA
          </Typography>
          <Typography
            variant="h8"
            color="initial"
            marginTop="10px"
            marginBottom="10px"
          >
            About company:
          </Typography>
          <p>
            <strong>About us:</strong>
          </p>
        </Stack>
        <Box
          style={{
            height: "200px",
            overflow: "hidden",
            maskImage:
              "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
          }}
        >
          {data.jobDetailsFromCompany}
        </Box>

        <Button
          style={{
            top: "-20px",
            textTransform: "none",
          }}
          fullWidth
        >
          View job
        </Button>

        <Stack margin="5px 0px 15px 0">
          <h2
            style={{
              color: "#73797e",
              fontWeight: "500",
            }}
          >
            Minimum Experience
          </h2>
          <h2>2 years</h2>
        </Stack>
      </CardContent>
      <Box
        style={{
          margin: "5px 0 0 0",
        }}
      >
        <Button
          fullWidth
          style={{
            backgroundColor: "rgb(85, 239, 196)",
            color: "black",
            textTransform: "none",
          }}
        >
          ⚡ Easy Apply
        </Button>
        <Button
          fullWidth
          style={{
            backgroundColor: "rgb(85, 239, 196)",
            textTransform: "none",
            color: "black",
            marginTop: 5,
          }}
        >
          <BadgeAvatars></BadgeAvatars>
          Unlock referral asks
        </Button>
      </Box>
    </Paper>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  border: `2px solid ${theme.palette.background.paper}`,
}));

function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          style={{
            width: "25px",
            height: "25px",
            marginRight: "2px",
          }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
      </StyledBadge>
    </Stack>
  );
}

export default JobCard;
