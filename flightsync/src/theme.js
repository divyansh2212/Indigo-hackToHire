import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#009688',
        },
        secondary: {
            main: '#03dac6',
        },
        background: {
            default: '#F8F8FF',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#e0e0e0',
            secondary: '#b0bec5',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#e0e0e0',
            letterSpacing: '0.1em',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#e0e0e0',
            letterSpacing: '0.1em',
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#e0e0e0',
            letterSpacing: '0.1em',
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#e0e0e0',
            letterSpacing: '0.1em',
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#e0e0e0',
            letterSpacing: '0.1em',
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 700,
            color: '#e0e0e0',
            letterSpacing: '0.1em',
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            color: '#b0bec5',
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            color: '#b0bec5',
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1e1e1e',
                    color: '#e0e0e0',
                    borderRadius: 12,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                    transition: 'background-color 0.3s, transform 0.3s',
                    '&:hover': {
                        backgroundColor: '#2c2c2c',
                        transform: 'scale(1.03)',
                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.8)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#121212',
                    color: '#e0e0e0',
                    borderRadius: 16,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 12,
                    padding: '10px 20px',
                    fontWeight: 600,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                },
                containedPrimary: {
                    backgroundColor: '#009688',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#00796b',
                    },
                },
                containedSecondary: {
                    backgroundColor: '#03dac6',
                    color: '#000000',
                    '&:hover': {
                        backgroundColor: '#018786',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1e1e1e',
                    color: '#e0e0e0',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#e0e0e0',
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#e0e0e0',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#121212',
                    color: '#e0e0e0',
                    borderRadius: 16,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1e1e1e',
                    color: '#e0e0e0',
                    borderRadius: 8,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    borderRadius: 4,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                },
            },
        },
    },
});

export default theme;
