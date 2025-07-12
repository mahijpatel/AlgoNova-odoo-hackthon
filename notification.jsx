// Notifications.jsx
import { Box, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

const Notifications = () => (
  <Menu>
    <MenuButton as={IconButton} icon={<BellIcon />} />
    <MenuList>
      <MenuItem>You got a reply on your question</MenuItem>
      <MenuItem>@mahi mentioned you</MenuItem>
    </MenuList>
  </Menu>
);

export default Notifications;