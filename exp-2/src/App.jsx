import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Paper
} from '@mui/material'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Card as BootstrapCard, Button as BootstrapButton, Row, Col } from 'react-bootstrap'

const theme = createTheme({
  palette: {
    primary: { main: '#c00000' },   // CU Red
    secondary: { main: '#808080' }  // CU Gray
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
        <AppBar position="static" sx={{ width: '100%', py: 1 }}>
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Material UI vs Bootstrap Comparison
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
          <Grid container spacing={2}>
            {/* LEFT SIDE - MATERIAL UI */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Paper elevation={3} sx={{ p: 1.5, backgroundColor: '#fff3e0', mb: 1.5, border: '2px solid #ff9800' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#e65100' }}>
                    ⬅️ Material UI Dashboard
                  </Typography>
                  <Typography variant="caption" sx={{ textAlign: 'center', mt: 0.5, fontWeight: 'bold', display: 'block' }}>
                    🎨 Advanced Components with Theme System
                  </Typography>
                </Paper>

                <Grid container spacing={1.5}>
                  <Grid item xs={12}>
                    <Card sx={{ 
                      boxShadow: 4, 
                      transition: '0.3s',
                      '&:hover': { 
                        transform: 'translateY(-4px)',
                        boxShadow: 8
                      }
                    }}>
                      <CardContent sx={{ p: 2, textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                          Users
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
                          1,234
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12}>
                    <Card sx={{ 
                      boxShadow: 4, 
                      transition: '0.3s',
                      '&:hover': { 
                        transform: 'translateY(-4px)',
                        boxShadow: 8
                      }
                    }}>
                      <CardContent sx={{ p: 2, textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                          Revenue
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
                          ₹45,678
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12}>
                    <Card sx={{ 
                      boxShadow: 4, 
                      transition: '0.3s',
                      '&:hover': { 
                        transform: 'translateY(-4px)',
                        boxShadow: 8
                      }
                    }}>
                      <CardContent sx={{ p: 2, textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                          Orders
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
                          567
                        </Typography>
                        <Button variant="contained" size="small" sx={{ px: 3, py: 0.5, fontSize: '0.9rem' }}>
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Paper elevation={3} sx={{ p: 1, mt: 1.5, backgroundColor: '#e3f2fd', border: '2px solid #2196f3' }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#0d47a1', display: 'block' }}>
                    ✨ Features: sx prop, Theme customization, Hover effects
                  </Typography>
                </Paper>
              </Box>
            </Grid>

            {/* RIGHT SIDE - BOOTSTRAP */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Paper elevation={3} sx={{ p: 1.5, backgroundColor: '#f3e5f5', mb: 1.5, border: '2px solid #9c27b0' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#6a1b9a' }}>
                    Bootstrap Dashboard ➡️
                  </Typography>
                  <Typography variant="caption" sx={{ textAlign: 'center', mt: 0.5, fontWeight: 'bold', display: 'block' }}>
                    🎯 Traditional CSS Classes & Utilities
                  </Typography>
                </Paper>

                <div>
                  <BootstrapCard className="mb-2 shadow">
                    <BootstrapCard.Body style={{ padding: '1rem', textAlign: 'center' }}>
                      <BootstrapCard.Title style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#c00000' }}>
                        Users
                      </BootstrapCard.Title>
                      <BootstrapCard.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
                        1,234
                      </BootstrapCard.Text>
                    </BootstrapCard.Body>
                  </BootstrapCard>

                  <BootstrapCard className="mb-2 shadow">
                    <BootstrapCard.Body style={{ padding: '1rem', textAlign: 'center' }}>
                      <BootstrapCard.Title style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#c00000' }}>
                        Revenue
                      </BootstrapCard.Title>
                      <BootstrapCard.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
                        ₹45,678
                      </BootstrapCard.Text>
                    </BootstrapCard.Body>
                  </BootstrapCard>

                  <BootstrapCard className="mb-2 shadow">
                    <BootstrapCard.Body style={{ padding: '1rem', textAlign: 'center' }}>
                      <BootstrapCard.Title style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#c00000' }}>
                        Orders
                      </BootstrapCard.Title>
                      <BootstrapCard.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', marginBottom: '0.8rem' }}>
                        567
                      </BootstrapCard.Text>
                      <BootstrapButton variant="danger" size="sm" style={{ padding: '6px 20px', fontSize: '0.9rem' }}>
                        View Details
                      </BootstrapButton>
                    </BootstrapCard.Body>
                  </BootstrapCard>
                </div>

                <Paper elevation={3} sx={{ p: 1, mt: 1.5, backgroundColor: '#fce4ec', border: '2px solid #e91e63' }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#880e4f', display: 'block' }}>
                    🎯 Features: className utilities, Inline styles, Variant props
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>

          {/* COMPARISON BOX AT BOTTOM */}
          <Paper elevation={8} sx={{ p: 2, mt: 2, backgroundColor: '#fff9c4', border: '3px solid #fbc02d' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#f57f17', mb: 1.5 }}>
              🔍 Key Differences
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 1.5, backgroundColor: '#e3f2fd', borderRadius: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 0.5 }}>
                    Material UI:
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', lineHeight: 1.6 }}>
                    • Uses sx prop for styling<br/>
                    • Built-in theme system<br/>
                    • Advanced animations & transitions<br/>
                    • Component-based approach
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 1.5, backgroundColor: '#fce4ec', borderRadius: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#c2185b', mb: 0.5 }}>
                    Bootstrap:
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', lineHeight: 1.6 }}>
                    • Uses className for styling<br/>
                    • CSS utility classes<br/>
                    • Simple variant props<br/>
                    • Traditional CSS approach
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
