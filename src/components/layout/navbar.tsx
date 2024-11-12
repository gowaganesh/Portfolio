import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { constants } from "../../lib/utils/constants/constants";
import workExperienceBanner from "../../assets/bg3.jpg";
import projectsBanner from "../../assets/bg1.jpg";
import homeBannerImage from "../../assets/bg2.jpg";

const drawerWidth = 240;

const DrawerAppBar = () => {
  const { pathname } = useLocation();
  const { PORTFOLIO_USER_SHORT_NAME, ROUTES } = constants;
  const { ABOUT, HOME, PROJECTS, EXPERIENCE } = ROUTES;
  const navItems = [
    { label: "Start Here", path: HOME },
    { label: "About", path: ABOUT },
    { label: "Resume", path: PROJECTS },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  
  // Memoizing navigation function
  const navigateToPage = React.useCallback((item: { label: string; path: string }) => {
    if (item.label === "Resume") {
      window.open(item?.path, "_blank");
    } else {
      navigate(item.path);
    }
  }, [navigate]);

  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);

  // Memoize banner images mapping based on the pathname
  const getBannerImages = React.useMemo(() => {
    return {
      [ABOUT]: workExperienceBanner,
      [EXPERIENCE]: workExperienceBanner,
      [HOME]: homeBannerImage,
      [PROJECTS]: projectsBanner,
    }[pathname || HOME];
  }, [ABOUT, EXPERIENCE, HOME, PROJECTS, pathname]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {PORTFOLIO_USER_SHORT_NAME}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => navigateToPage(item)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label?.toUpperCase()} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: `url(${getBannerImages})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "600px",
        width: "100%",
      }}
    >
      <AppBar
        elevation={0}
        component="nav"
        position="sticky"
        sx={{
          backgroundColor: "transparent",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            fontWeight={800}
            onClick={() => navigate("/")}
            sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
          >
            {PORTFOLIO_USER_SHORT_NAME}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => navigateToPage(item)}
                key={item.label}
                sx={{
                  color: "#fff",
                  ...(item.label === "Resume" && {
                    fontWeight: 600,
                    border: 2,
                    borderRadius: 7,
                    ml: 1,
                  }),
                }}
              >
                {item.label?.toUpperCase()}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              ml: 2,
              display: { xs: "flex", sm: "none" },
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              fontWeight={800}
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
            >
              {PORTFOLIO_USER_SHORT_NAME}
            </Typography>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default DrawerAppBar;
