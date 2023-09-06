import { styled } from "styled-components";
import ProjectCard from "./ProjectCard";

interface Project{
  name: string
}

interface Props {
  projects: Array<Project>;
}

export default function Projects(props: Props) {
  const { projects } = props;
  return (
    <ProjectCards>
      {projects.map((project, index) => {
        return <ProjectCard project={project} key={index} />
      })}
    </ProjectCards>
  );
}

const ProjectCards = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
