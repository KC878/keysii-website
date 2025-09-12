import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { RiMenuUnfold3Line } from "react-icons/ri";
import type { HeaderProps } from "../interfaces/interfaces";
import { icon } from "../constants/icons";

const NavDrawer: React.FC<HeaderProps> = ({ headerItems, setStartNow }) => {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const start = [{ title: "Start Now" }];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {start.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              component="a"
              href={String(item.title)}
              onClick={() => {
                setStartNow && setStartNow(true);
              }}
            >
              {/* Since Icon is defined optional, we check if Icon as Value exist on Object headerItems, then render*/}
              <ListItemIcon>
                <img
                  src={icon.circledIcon}
                  alt="Start Icon"
                  style={{
                    width: 25,
                    height: 25,
                    objectFit: "contain",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <span
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",

                      gap: "8px",
                      color: hover ? "white" : "initial",
                      backgroundColor: hover ? "#39FF14" : "#ced2d7",
                      boxShadow: hover
                        ? "0 0 10px #32CD32, 0 0 20px rgba(50, 205, 50, 0.6)"
                        : "none",
                      transition: "background 0.3s",
                      transform: hover ? "scale(1.05)" : "scale(1)",
                      borderRadius: "10px",
                      height: "5vh",
                      width: "25vw",
                    }}
                  >
                    {item.title}
                    <span role="img" aria-label="rocket">
                      🚀
                    </span>
                  </span>
                }
                slotProps={{
                  primary: {
                    style: {
                      fontFamily: "Poppins, Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "1rem",
                      color: "white",
                    },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "white", opacity: 0.2 }} />
      <List>
        {headerItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton component="a" href={String(item.link)}>
              {/* Since Icon is defined optional, we check if Icon as Value exist on Object headerItems, then render*/}
              <ListItemIcon>
                {item.icon && <item.icon size={15} color="white" />}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                slotProps={{
                  primary: {
                    style: {
                      fontFamily: "Poppins, Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "1rem",
                      color: "white",
                    },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <RiMenuUnfold3Line color="white" size={30} />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            style: {
              backgroundColor: "#0c0c0c",
              fontFamily: "Times New Roman",
            },
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default NavDrawer;
