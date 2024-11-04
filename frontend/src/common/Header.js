import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Settings from '@mui/icons-material/SettingsOutlined';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';
import logo from '../image/to-do-list.png'

export default function Header() {
    return (
        <React.Fragment>
            <Box  sx={{ color: '#fff', background: 'linear-gradient(#221ECA, #6461DA)', display: 'flex',
                       alignItems: 'center', textAlign: 'center', justifyContent: "space-between", height: '64px' }}>
                <img
                    height='64px'
                    src={logo}
                    alt="bed"
                    loading="lazy"
                />
                <Box sx={{display: 'flex'}}>
                <Typography sx={{ fontWeight: 'regular', minWidth: 100 }}>Dashboards</Typography>
                <Typography sx={{ fontWeight: 'regular', minWidth: 100 }}>Data Stream</Typography>
                <Badge badgeContent={"Beta"} sx={{ color: "#FF6574"}}>
                    <Typography sx={{ fontWeight: 'regular', minWidth: 100, color: "#fff" }}>Analysis</Typography>
                </Badge>
                <Typography sx={{ fontWeight: 'regular', minWidth: 100 }}>Users</Typography>
                </Box>
                <Box sx={{  justifyContent: "flex-end"}}>
                    <IconButton sx = {{color: '#fff'}}>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton sx = {{color: '#fff'}}>
                        <HelpIcon/>
                    </IconButton>
                    <IconButton sx = {{color: '#fff'}}>
                        <Settings/>
                    </IconButton>
                </Box>
            </Box>
        </React.Fragment>
    );
}