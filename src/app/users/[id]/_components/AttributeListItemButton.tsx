import ListItemButton from '@mui/material/ListItemButton';
import { alpha } from '@mui/system';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

type AttributeListItemButtonProps = PropsWithChildren<{
  href: string;
}>;

export function AttributeListItemButton({ children, href }: AttributeListItemButtonProps) {
  return (
    <ListItemButton
      component={NextLink}
      href={href}
      sx={(theme) => ({
        bgcolor: 'inherit',
        pr: 1,
        ':hover': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        },
      })}
    >
      {children}
    </ListItemButton>
  );
}
