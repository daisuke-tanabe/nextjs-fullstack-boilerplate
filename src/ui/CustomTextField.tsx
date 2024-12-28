import TextField, { type TextFieldProps } from '@mui/material/TextField';

export function CustomTextField(props: Omit<TextFieldProps, 'variant' | 'slotProps'>) {
  return (
    <TextField
      variant="filled"
      size="small"
      sx={{
        color: 'red',
      }}
      slotProps={{
        input: {
          disableUnderline: true,
          sx: {
            borderColor: 'grey.300',
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 1,
          },
        },
        htmlInput: {
          sx: {
            borderRadius: 1,
          },
        },
        inputLabel: {
          shrink: true,
        },
      }}
      {...props}
    />
  );
}
