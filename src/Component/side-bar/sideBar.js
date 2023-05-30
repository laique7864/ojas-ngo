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
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  EventOutlinedIcon,
  ChevronRight,
} from "@mui/icons-material";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import EventIcon from '@mui/icons-material/Event';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// const { styled } = require("@mui/system");
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InputIcon from '@mui/icons-material/Input';
import { styled } from '@mui/system'

import { tokens } from "../../theme";

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});


const navItems = [
  {
    text: "Home",
    icon: <HomeOutlined />,
  },
  {
    text: "VerifiedMembers",
    icon: <HowToRegIcon />,
  },
  {
    text: "Event",
    icon: <EventIcon />,
  },

  {
    text: "admindonerlist",
    icon: <Diversity1Icon />,
  },
  {
    text: "Management Team",
    icon: <Groups2Outlined />,
  },
  {
    text: "Contact",
    icon: <CallOutlinedIcon />,
  },
  {
    text: "Log Out",
    icon: <InputIcon />,
  }
];

const Sidebar = ({
  drawerWidth,
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
    <Box component="nav">
      <IconButton style={{ position: 'absolute', top: '0px', left: "0px", color: colors.blueAccent[100] }} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <ChevronRight />

      </IconButton>

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
                {/* <Typography
                  fontSize="0.8rem"
                  sx={{ color: colors.secondary[200] }}
                >
                  Skyline
                </Typography> */}
              </Box>

            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
