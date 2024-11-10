import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import BasicCard from '../block';
import Divider from '@mui/material/Divider';
import { experiences } from './info/experience';
import { projects } from './info/projects';
import { edu } from './info/edu';


// ----------------------------------------------------------------------
const skills = [
    "Python", "Java", "C", "Ocaml", "CSS", "HTML", "JavaScript", "C#", "Swift"
];
const tools = [
    "Docker", "Git", "LaTeX", "Linux", "MongoDB", "SQL", "React.js", "Next.js", "TypeScript", "JIRA", "Swagger", "Redis"
];

export default function BlogView() {
  return (
    <Container sx={{ minWidth: 275, bgcolor: '#cfe8fc' }} mb={2}>
      

      <Stack spacing={2} mt={2} mb={2}>
        <Typography variant="h4">Iris Ho</Typography>
        <Stack direction="row" mt={2} mb={2} spacing={1}>
            {skills.map((data, index) => (
                <Chip key={index} label={data} color="primary"/>
            ))}
        </Stack>
        <Stack direction="row" mt={2} mb={2} spacing={1}>
            {tools.map((data, index) => (
                <Chip key={index} label={data} color="success"/>
            ))}
        </Stack>
        <Divider />
        <Typography variant="h4">Education</Typography>
        {edu.map((proj, index) => (
            <BasicCard key={index} exp={proj}/>
        ))}

        <Typography variant="h4">Projects</Typography>
        
        {projects.map((proj, index) => (
            <BasicCard key={index} exp={proj}/>
        ))}

        <Typography variant="h4">Work Experience</Typography>

        {experiences.map((exp, index) => (
            <BasicCard key={index} exp={exp}/>
        ))}
      </Stack>

    </Container>
  );
}