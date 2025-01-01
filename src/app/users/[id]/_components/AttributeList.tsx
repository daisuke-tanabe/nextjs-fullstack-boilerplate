import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { PropsWithChildren } from 'react';

type AttributeListProps = PropsWithChildren<{
  label: string;
}>;

export function AttributeList({ children, label }: AttributeListProps) {
  return (
    <List
      subheader={
        <ListSubheader sx={{ bgcolor: 'inherit', borderRadius: 'inherit', fontWeight: 'bold', lineHeight: '52px' }}>
          {label}
        </ListSubheader>
      }
      sx={{ bgcolor: 'inherit', borderRadius: 'inherit', pb: 0 }}
    >
      {children}
    </List>
  );
}
