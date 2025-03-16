import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { constants } from "../../lib/utils/constants/constants";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Add } from "@mui/icons-material";

const drawerWidth = 240;

const DrawerAppBar = () => {
  const { PORTFOLIO_USER_SHORT_NAME, ROUTES } = constants;
  const { ABOUT, HOME, PROJECTS, RESUME, AWARDS, CERTIFICATIONS, EDUCATION} = ROUTES;
  const navItems = [
    { label: "Start Here", path: HOME },
    {
      label: "About",
      path: ABOUT,
      subMenu: [
        { label: "Experience", path: ABOUT },
        { label: "Awards", path: AWARDS },
        { label: "Certifications", path: CERTIFICATIONS },
        { label: "Education", path: EDUCATION },
      ],
    },
    { label: "Projects", path: PROJECTS },
    { label: "Resume", path: RESUME },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  // Memoizing navigation function
  const navigateToPage = React.useCallback(
    (item: { label: string; path: string }) => {
      if (item.label === "Resume") {
        window.open(item?.path, "_blank");
      } else {
        navigate(item.path,{
          replace : true
        });
      }
      handleDrawerToggle()
    },
    [navigate]
  );

  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
    <Typography variant="h6" sx={{ my: 2, textAlign: "center", fontWeight: 600 }}>
      {PORTFOLIO_USER_SHORT_NAME}
    </Typography>
    <Divider />
    <Box p={3}>
      {navItems.map((item, index) => {
        const { subMenu, label } = item;
        const renderSubMenu = () => (
            <AccordionDetails sx={{p:0 , mt:-2 , mb:1}}>
              {subMenu?.map(menu => <Typography px={1} py={1} onClick={() => navigateToPage(menu)}>{menu.label}</Typography>)}
            </AccordionDetails>
        );
        const renderMainMenu = () => (
          <Typography fontWeight={600} onClick={() => navigateToPage(item)} key={index}>
            {label}
          </Typography>
        );

        return subMenu ? (
          <Accordion slotProps={{ transition: { unmountOnExit: true } }} key={index} elevation={0}>
            <AccordionSummary
              aria-controls="panel1-content"
              id={`panel1-header-${index}`}
              sx={{ p: 0,  fontWeight: 800, fontFamily: 'unset' }}
              expandIcon={<Add color="error" />}
            >
              <Typography fontWeight={600}>{label}</Typography>
            </AccordionSummary>
            {renderSubMenu()}
          </Accordion>
        ) : renderMainMenu();
      })}
    </Box>
  </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <AppBar
        elevation={0}
        component="nav"
        position="static"
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
          <Link to={HOME} replace>
            <Typography
              variant="h6"
              component="div"
              fontWeight={800}
              onClick={() => navigate("/")}
              sx={{       ":hover" :{
                fontSize : 22
              }, display: { xs: "none", sm: "block" }, cursor: "pointer" }}
            >
              {PORTFOLIO_USER_SHORT_NAME}
            </Typography>
          </Link>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => navigateToPage(item)}
                key={item.label}
                sx={{
                  color: "#fff",
                  ":hover" :{
                    fontWeight : 800
                  },
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
    </>
  );
};

export default DrawerAppBar;
