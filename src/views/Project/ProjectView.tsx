import { Box, Chip, Typography, useMediaQuery, Container, Stack } from "@mui/material";
import { projectByYears } from "../../utils/projects";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { project } from "../../utils/projects";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ProjectView() {
  const [project, setProject] = useState<project>({} as project);
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:600px)");

  const params = useParams();

  useEffect(() => {
    projectByYears.map((year) => {
      year.projects.map((project) => {
        if (project.name === params.title) {
          setProject(project);
        }
      });
    });
  }, [params.title]);

  return (
    <Box sx={{ 
      display: "flex", 
      alignItems: "center", 
      flexDirection: "column", 
      width: "100%", 
      overflowX: "hidden",
      backgroundColor: "#F5F5F5",
      minHeight: "100vh",
      pt: isMobile ? 0 : 4
    }}>
      <Container maxWidth="lg" sx={{ 
        py: isMobile ? 0 : 4,
        px: isMobile ? 0 : 4
      }}>
        {/* Mobile Header */}
        {isMobile && (
          <Box sx={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            backgroundColor: "#F5F5F5",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            py: 2,
            px: 2,
            display: "flex",
            alignItems: "center",
            gap: 2
          }}>
            <IconButton 
              onClick={() => window.history.back()} 
              sx={{ 
                backgroundColor: "white",
                boxShadow: "4px 4px 20px -3px #000000",
                "&:hover": {
                  backgroundColor: "#f5f5f5"
                }
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: "bold",
                color: "text.primary",
                fontSize: "1.2em",
                flex: 1,
                textAlign: "center",
                mr: 4 // To offset the back button
              }}
            >
              {project.name}
            </Typography>
          </Box>
        )}

        {/* Desktop Header */}
        {!isMobile && (
          <Box sx={{ 
            position: "relative", 
            mb: 4,
            mt: 2
          }}>
            {isSmallScreen && (
              <IconButton 
                onClick={() => window.history.back()} 
                sx={{ 
                  position: "absolute", 
                  left: -16, 
                  top: -16,
                  backgroundColor: "white",
                  boxShadow: "4px 4px 20px -3px #000000",
                  "&:hover": {
                    backgroundColor: "#f5f5f5"
                  }
                }}
              >
                <ArrowBackIcon />
              </IconButton>
            )}
            <Typography 
              variant="h3" 
              align="center" 
              gutterBottom 
              sx={{ 
                fontWeight: "bold",
                mb: 4,
                color: "text.primary",
                fontSize: isSmallScreen ? "2.2em" : "3.2em"
              }}
            >
              {project.name}
            </Typography>
          </Box>
        )}

        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: isSmallScreen ? "column" : "row",
            gap: isMobile ? 0 : 4,
            alignItems: "flex-start",
            padding: isMobile ? 0 : "0 10%"
          }}
        >
          {/* Project Image */}
          <Box 
            sx={{ 
              flex: 1,
              overflow: "hidden",
              borderRadius: isMobile ? 0 : "10px",
              maxWidth: isSmallScreen ? "100%" : "50%",
              width: "100%",
              boxShadow: isMobile ? "none" : "4px 4px 20px -3px #000000",
              "& img": {
                borderRadius: isMobile ? 0 : "10px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
                display: "block"
              }
            }}
          >
            <img 
              src={project.thumbnailUrl} 
              alt={project.name}
            />
          </Box>

          {/* Project Details */}
          <Box 
            sx={{ 
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? 3 : 4,
              textAlign: isSmallScreen ? "center" : "left",
              width: "100%",
              px: isMobile ? 3 : 0,
              py: isMobile ? 4 : 0
            }}
          >
            <Box>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: "bold",
                  color: "text.primary",
                  fontSize: isMobile ? "1.3em" : isSmallScreen ? "1.3em" : "1.5em",
                  mb: isMobile ? 2 : 2
                }}
              >
                Description
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: "1.8em",
                  whiteSpace: "pre-line",
                  color: "text.secondary",
                  fontSize: isMobile ? "1em" : "1em"
                }}
              >
                {project.description}
              </Typography>
            </Box>

            <Box>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: "bold",
                  color: "text.primary",
                  fontSize: isMobile ? "1.3em" : isSmallScreen ? "1.3em" : "1.5em",
                  mb: isMobile ? 2 : 2
                }}
              >
                Technologies
              </Typography>
              <Stack 
                direction="row" 
                spacing={1} 
                flexWrap="wrap"
                justifyContent={isSmallScreen ? "center" : "flex-start"}
                sx={{
                  gap: isMobile ? 1 : 1
                }}
              >
                {project.tags?.map((tag, index) => (
                  <Chip 
                    key={index} 
                    label={tag} 
                    variant="outlined"
                    size={isMobile ? "medium" : "medium"}
                    sx={{ 
                      m: isMobile ? 0.5 : 0.5,
                      fontWeight: 500,
                      borderColor: "primary.main",
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)"
                      }
                    }} 
                  />
                ))}
              </Stack>
            </Box>

            <Box 
              sx={{ 
                display: "flex",
                gap: 2,
                justifyContent: isSmallScreen ? "center" : "flex-start",
                mt: isMobile ? 2 : 2
              }}
            >
              {project.prodUrl && (
                <IconButton 
                  href={project.prodUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  size="large"
                  sx={{ 
                    color: "primary.main",
                    boxShadow: "4px 4px 20px -3px #000000",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#f5f5f5"
                    }
                  }}
                >
                  <LanguageIcon />
                </IconButton>
              )}
              {project.sourceUrl && (
                <IconButton 
                  href={project.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  size="large"
                  sx={{ 
                    color: "primary.main",
                    boxShadow: "4px 4px 20px -3px #000000",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#f5f5f5"
                    }
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
