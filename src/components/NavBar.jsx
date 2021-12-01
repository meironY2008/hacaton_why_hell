import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function NavBar({ setValue, value }) {
  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="NEW USER" icon={<RestoreIcon />} />
        <BottomNavigationAction label="NEW CHARGE" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Box>
  );
}
