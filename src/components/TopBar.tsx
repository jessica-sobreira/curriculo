import { Box, Toolbar, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const MusicStyled = styled(MusicNoteIcon)`
    font-size: 30px;
    margin-right: 4px;
`

export function TopBar() {
    
    return (
        <>
        <AppBar position='relative'>
            <Toolbar>
                <MusicStyled />
                <Box display='flex' flexDirection='column'>
                    <h2>Lisa Simpson</h2>
                    <p>Currículo</p>
                </Box>
            </Toolbar>
        </AppBar>
        </> 
    )

}