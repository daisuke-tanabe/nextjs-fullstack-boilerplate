'use client';

import Check from '@mui/icons-material/Check';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ContrastIcon from '@mui/icons-material/Contrast';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutIcon from '@mui/icons-material/Logout';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Avatar, ListItemIcon } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import { useColorScheme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, MouseEvent, ChangeEvent, useEffect } from 'react';

import { useMe } from '@/app/_hooks/useMe';
import { browserClient } from '@/utils/supabase/browserClient';

const themeTextMap = {
  system: 'システム',
  light: 'ライト',
  dark: 'ダーク',
};

export function AppBar() {
  const { me, setMe } = useMe();
  const { mode = 'system', setMode } = useColorScheme();
  const pathname = usePathname();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [secondaryAnchorEl, setSecondaryAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const secondaryOpen = Boolean(secondaryAnchorEl);
  const isCurrentLoginPath = pathname === '/login';

  const supabase = browserClient();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // secondaryからprimaryに戻る
  const handlePrimaryClick = () => {
    setAnchorEl(secondaryAnchorEl);
    setSecondaryAnchorEl(null);
  };

  // primaryからsecondaryに移動する
  const handleSecondaryClick = () => {
    setAnchorEl(null);
    setSecondaryAnchorEl(anchorEl);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as 'light' | 'dark' | 'system';
    setMode(value);
    localStorage.setItem('mui-mode', value);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setMe(null);
    setAnchorEl(null);
    // 自身のユーザーページでサインアウトした際はホームに戻す
    if (me && pathname.includes(`/users/${me.id}`)) router.push('/');
  };

  useEffect(() => {
    const uiMode = localStorage.getItem('mui-mode') as 'light' | 'dark' | 'system' | null;
    setMode(uiMode ?? 'system');
  }, []);

  if (pathname === '/signup') return null;

  return (
    <>
      <MuiAppBar elevation={0} sx={{ bgcolor: 'background.default' }}>
        <Toolbar>
          <Typography
            component="h1"
            sx={{ color: 'text.primary', fontSize: 24, fontWeight: 'bold', flexGrow: 1, display: 'inline-flex' }}
          >
            <Link component={NextLink} href="/" underline="none" sx={{ color: 'inherit', fontSize: 20 }}>
              Lorem ipsum
            </Link>
          </Typography>

          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            {!me && (
              <>
                <Button
                  component={NextLink}
                  href="/login"
                  variant="outlined"
                  size="small"
                  disabled={isCurrentLoginPath}
                >
                  Log&nbsp;In
                </Button>
                <Button component="a" href="/signup" variant="contained" size="small" disableElevation>
                  Sign&nbsp;Up
                </Button>
              </>
            )}
            <IconButton onClick={handleClick}>
              {me ? (
                <Avatar sx={{ width: 32, height: 32 }}>
                  <PersonIcon />
                </Avatar>
              ) : (
                <MoreVertIcon />
              )}
            </IconButton>
          </Stack>
        </Toolbar>
      </MuiAppBar>

      <Toolbar />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: {
              borderRadius: 2,
              width: 300,
            },
          },
        }}
        MenuListProps={{
          sx: {
            p: 0,
          },
        }}
        TransitionComponent={undefined}
      >
        {me && (
          <Box component="li">
            <Stack direction="row" spacing={1.5} sx={{ p: 2 }}>
              <Avatar sx={{ width: 32, height: 32 }}>
                <PersonIcon />
              </Avatar>
              <Stack spacing={0.5}>
                <Typography>{me.displayName ?? '名称未設定'}</Typography>
                <Typography>{me.email}</Typography>
              </Stack>
            </Stack>
            <Divider />
          </Box>
        )}
        {me && (
          <Box component="li">
            <Box sx={{ py: 1 }}>
              <MenuItem component={NextLink} href={`/users/${me.id}`} onClick={handleMenuClose} sx={{ py: 1, px: 2 }}>
                <ListItemIcon>
                  <PersonOutlineIcon />
                </ListItemIcon>
                <ListItemText>マイアカウント</ListItemText>
              </MenuItem>
              <MenuItem component="div" onClick={() => void handleLogout()} sx={{ py: 1, px: 2 }}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText>ログアウト</ListItemText>
              </MenuItem>
            </Box>
            <Divider />
          </Box>
        )}
        <Box component="li" sx={{ py: 1 }}>
          <MenuItem component="div" onClick={handleSecondaryClick} sx={{ py: 1, px: 2 }}>
            <ListItemIcon>
              {mode === 'system' && <ContrastIcon />}
              {mode === 'light' && <LightModeIcon />}
              {mode === 'dark' && <ModeNightIcon />}
            </ListItemIcon>
            <ListItemText>テーマ:&nbsp;{themeTextMap[mode]}</ListItemText>
            <ChevronRightIcon />
          </MenuItem>
        </Box>
      </Menu>

      <Menu
        anchorEl={secondaryAnchorEl}
        open={secondaryOpen}
        onClose={handleSecondaryClick}
        slotProps={{
          paper: {
            sx: {
              borderRadius: 2,
              width: 300,
            },
          },
        }}
        MenuListProps={{
          sx: {
            p: 0,
          },
        }}
      >
        <Box component="li">
          <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', p: 1 }}>
            <IconButton onClick={handlePrimaryClick}>
              <ChevronLeftIcon />
            </IconButton>
            <Typography sx={{ fontSize: 16 }}>デザイン</Typography>
          </Stack>
          <Divider />
          <RadioGroup name="theme" value={mode} onChange={handleThemeChange} sx={{ py: 1 }}>
            <MenuItem component="div" sx={{ p: 0 }}>
              <FormControlLabel
                value="system"
                control={
                  <Radio sx={{ p: 0 }} checkedIcon={<Check />} icon={<SvgIcon />} disableRipple disableTouchRipple />
                }
                label="システム"
                sx={{ mx: 0, gap: 1, display: 'flex', py: 1, px: 2, width: '100%' }}
              />
            </MenuItem>
            <MenuItem component="div" sx={{ p: 0 }}>
              <FormControlLabel
                value="light"
                control={
                  <Radio sx={{ p: 0 }} checkedIcon={<Check />} icon={<SvgIcon />} disableRipple disableTouchRipple />
                }
                label="ライト"
                sx={{ mx: 0, gap: 1, display: 'flex', py: 1, px: 2, width: '100%' }}
              />
            </MenuItem>
            <MenuItem component="div" sx={{ p: 0 }}>
              <FormControlLabel
                value="dark"
                control={
                  <Radio sx={{ p: 0 }} checkedIcon={<Check />} icon={<SvgIcon />} disableRipple disableTouchRipple />
                }
                label="ダーク"
                sx={{ mx: 0, gap: 1, display: 'flex', py: 1, px: 2, width: '100%' }}
              />
            </MenuItem>
          </RadioGroup>
        </Box>
      </Menu>
    </>
  );
}
