import Box from '@mui/material/Box';
import { PropsWithChildren } from 'react';

export function AttributeBox({ children }: PropsWithChildren) {
  return (
    <Box
      sx={[
        {
          bgcolor: 'common.white',
          borderRadius: 1.5,
          overflow: 'hidden',
        },
        (theme) =>
          theme.applyStyles('dark', {
            bgcolor: '#212121',
          }),
      ]}
    >
      {children}
    </Box>
  );
}
