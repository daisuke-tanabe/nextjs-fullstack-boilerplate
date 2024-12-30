import TextField, { type TextFieldProps } from '@mui/material/TextField';
import { alpha } from '@mui/system';

export function CustomTextField({
  readOnly = false,
  ...props
}: Omit<TextFieldProps, 'variant' | 'slotProps'> & {
  readOnly?: boolean;
}) {
  return (
    <TextField
      variant="filled"
      sx={(theme) => ({
        '& .MuiFormLabel-root': {
          color: theme.palette.text.primary,
          transform: 'translate(12px, 7px) scale(0.8)',
          '&.Mui-disabled': {
            color: theme.palette.text.secondary,
          },
          '&.Mui-focused': {
            color: theme.palette.primary.main,
          },
        },

        '& .MuiFilledInput-root': {
          backgroundColor: theme.palette.background.paper,
          borderColor: theme.palette.grey['400'],
          borderStyle: 'solid',
          borderWidth: 1,
          borderRadius: 1,
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.hover,
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.background.paper,
            borderColor: theme.palette.primary.main,
            boxShadow: `${alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)} 0 0 0 3px`,
          },
        },

        '& .MuiInputBase-input': {
          borderRadius: 1,
          paddingTop: 3.5,
          '&.Mui-disabled': {
            color: theme.palette.text.secondary,
            WebkitTextFillColor: theme.palette.text.secondary,
          },
        },
      })}
      slotProps={{
        input: {
          disableUnderline: true,
          readOnly,
        },
        inputLabel: {
          shrink: true,
        },
      }}
      {...props}
    />
  );
}
