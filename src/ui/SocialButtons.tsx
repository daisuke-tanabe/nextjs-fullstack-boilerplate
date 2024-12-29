import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

const socialIcons = [
  {
    iconAttribute: 'devicon:google',
    enabled: true,
  },
  {
    iconAttribute: 'logos:facebook',
    enabled: false,
  },
  {
    iconAttribute: 'simple-icons:apple',
    enabled: false,
  },
];

export function SocialButtons() {
  return (
    <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
      {socialIcons.map(({ iconAttribute, enabled }) =>
        !enabled ? null : (
          <IconButton
            key={iconAttribute}
            sx={{ borderStyle: 'solid', borderRadius: 2, borderWidth: 2, borderColor: 'grey.400' }}
          >
            <Icon icon={iconAttribute} width={24} />
          </IconButton>
        ),
      )}
    </Stack>
  );
}
