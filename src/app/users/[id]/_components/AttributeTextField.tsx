import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { HTMLInputTypeAttribute } from 'react';

export function AttributeTextField({
  disabled,
  id,
  label,
  name,
  placeholder,
  type,
  defaultValue,
}: {
  disabled?: boolean;
  defaultValue?: string | undefined;
  id?: string;
  label: string;
  name?: string;
  placeholder?: string | undefined;
  type: HTMLInputTypeAttribute;
}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1, gap: 2, alignItems: 'center' }}>
      <InputLabel htmlFor={id} sx={{ color: 'text.primary', flex: '1 0 auto', fontSize: 'default' }}>
        {label}
      </InputLabel>
      <TextField
        defaultValue={defaultValue}
        disabled={disabled}
        fullWidth
        id={id}
        name={name}
        placeholder={placeholder}
        slotProps={{
          input: {
            disableUnderline: true,
          },
          htmlInput: {
            sx: {
              fontSize: 'default',
              overflow: 'hidden',
              textAlign: 'right',
              textOverflow: 'ellipsis',
            },
          },
        }}
        type={type}
        variant="standard"
      />
    </Box>
  );
}
