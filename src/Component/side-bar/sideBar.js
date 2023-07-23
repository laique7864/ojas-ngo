import React from "react";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  Groups2Outlined,
} from "@mui/icons-material";
import EventIcon from '@mui/icons-material/Event';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// const { styled } = require("@mui/system");
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InputIcon from '@mui/icons-material/Input';
import { styled } from '@mui/system'
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

import { tokens } from "../../theme";

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});


const navItems = [
 
  {
    text: "VerifiedMembers",
    icon: <HowToRegIcon />,
  },
  {
    text: "Event",
    icon: <EventIcon />,
  },

  {
    text: "Posts",
    icon: <FeedOutlinedIcon />,
  },

  {
    text:'DonorTable',
    icon: <Groups2Outlined/>
  },
  {
    text: "Contact",
    icon: <CallOutlinedIcon />,
  }
];

const Sidebar = ({
  setIsSidebarOpen,
  isSidebarOpen,
  user
}) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.mode);
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav" overflow={"hidden"}>
    

      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: "250px",
            "& .MuiDrawer-paper": {
              color: colors.secondary[200],
              backgroundColor: "#278CEA",
              boxSixing: "border-box",
              boxShadow: "5px 0 5px rgba(0, 0, 0, 0.1)",
              borderWidth: isNonMobile ? 0 : "2px",
              width: "250px",
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={'white'}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    OJAS NGO
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />

                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? colors.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? colors.primary[600]
                            : "white",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? colors.primary[600]
                              : "white",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box position="absolute" bottom="2rem">
            <Divider style={{background:'White'}} />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">

              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: "white" }}
                >
                  {user?.firstName}
                </Typography>
              
              </Box>

            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
