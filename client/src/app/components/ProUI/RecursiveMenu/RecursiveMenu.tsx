import * as React from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import {
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";

export interface NavItem {
  linkName: string;
  link?: string;
  children?: NavItem[];
}

interface RecursiveMenuProps {
  items: NavItem[];
  level?: number;
  onNavigate?: () => void;
}

export default function RecursiveMenu({
  items,
  level = 0,
  onNavigate,
}: RecursiveMenuProps) {
  const location = useLocation();

  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>(
    {}
  );

  const handleToggle = (itemName: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const isActive = (link?: string) => {
    if (!link) return false;

    return location.pathname === link;
  };

  const hasChildren = (item: NavItem) =>
    Boolean(item.children && item.children.length > 0);

  return (
    <List disablePadding>
      {items.map((item) => {
        const childrenExist = hasChildren(item);
        const isItemOpen = openItems[item.linkName] ?? false;

        return (
          <React.Fragment key={item.linkName}>
            <ListItem disablePadding>
              <ListItemButton
                component={item.link ? Link : "button"}
                to={item.link}
                onClick={() => {
                  if (childrenExist) {
                    handleToggle(item.linkName);
                  } else {
                    onNavigate?.();
                  }
                }}
                selected={isActive(item.link)}
                sx={{
                  pl: 2 + level * 2,
                }}
              >
                <ListItemText primary={item.linkName} />

                {childrenExist &&
                  (isItemOpen ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>

            {childrenExist && (
              <Collapse in={isItemOpen} timeout="auto" unmountOnExit>
                <RecursiveMenu
                  items={item.children!}
                  level={level + 1}
                  onNavigate={onNavigate}
                />
              </Collapse>
            )}
          </React.Fragment>
        );
      })}
    </List>
  );
}