import React from 'react'
import { styled } from 'styled-components'

interface Project{
  name: string
}

interface Props{
  project: Project
}

export default function ProjectCard(props: Props) {
  const { project } = props

  return (
    <Card>
      { project.name }
    </Card>
  )
}

const Card = styled.div`
  border: 1px solid #cfcfcf;
  color: #cfcfcf;
  padding: 10px;
`