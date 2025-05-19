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
  const [isLoading, setIsLoading] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:600px)");

  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    projectByYears.map((year) => {
      year.projects.map((project) => {
        if (project.name === params.title) {
          setProject(project);
          setIsLoading(false);
        }
      });
    });
  }, [params.title]);

  if (isLoading) {
    return (
      <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        width: "100%", 
        height: "100vh",
        backgroundColor: "#F5F5F5"
      }}>
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      display: "flex", 
      alignItems: "center", 
      flexDirection: "column", 
      width: "100%", 
      overflowX: "hidden",
      backgroundColor: "#F5F5F5",
      minHeight: "100vh",
      pt: isMobile ? 0 : 8
    }}>
      <Container maxWidth="lg" sx={{ 
        py: isMobile ? 0 : 8,
        px: isMobile ? 0 : 6
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
                mr: 4
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
            mb: 6,
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
            gap: isSmallScreen ? 0 : 12,
            alignItems: isSmallScreen ? "center" : "flex-start",
            padding: isMobile ? 0 : "0 8%",
            mt: isSmallScreen ? 0 : 4
          }}
        >
          {/* Project Image */}
          <Box 
            sx={{ 
              flex: 1,
              overflow: "hidden",
              borderRadius: isMobile ? 0 : "16px",
              maxWidth: isSmallScreen ? "100%" : "45%",
              width: "100%",
              boxShadow: isMobile ? "none" : "8px 8px 24px -3px rgba(0,0,0,0.2)",
              mb: isSmallScreen ? 6 : 0,
              "& img": {
                borderRadius: isMobile ? 0 : "16px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)"
                }
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
              gap: isMobile ? 4 : 6,
              textAlign: isSmallScreen ? "center" : "left",
              width: "100%",
              px: isMobile ? 3 : 0,
              py: isMobile ? 4 : 0,
              alignItems: isSmallScreen ? "center" : "flex-start"
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
                  mb: isMobile ? 2 : 3
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
                  fontSize: isMobile ? "1em" : "1.1em",
                  "& strong": {
                    color: "text.primary",
                    fontWeight: 600
                  }
                }}
                dangerouslySetInnerHTML={{
                  __html: project.description ? project.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') : ''
                }}
              />
            </Box>

            <Box>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: "bold",
                  color: "text.primary",
                  fontSize: isMobile ? "1.3em" : isSmallScreen ? "1.3em" : "1.5em",
                  mb: isMobile ? 2 : 3
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
                  gap: isMobile ? 1 : 1.5
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
                mt: isMobile ? 2 : 3
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
                      backgroundColor: "#f5f5f5",
                      transform: "translateY(-2px)",
                      transition: "transform 0.2s ease-in-out"
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
                      backgroundColor: "#f5f5f5",
                      transform: "translateY(-2px)",
                      transition: "transform 0.2s ease-in-out"
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
