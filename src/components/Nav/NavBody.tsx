import { useState } from "react";
import { styled } from "styled-components";

interface Section {
  id: number;
  name: string;
}

interface Props {
  activeSection: number;
  setSection: (id: number) => void;
}

export default function NavBody(props: Props) {
  const [sections] = useState<Array<Section>>([
    { id: 1, name: "Projects" },
    // { id: 2, name: "Projects" },
    // { id: 3, name: "Projects" },
    // { id: 4, name: "Projects" },
  ]);

  return (
    <div>
      {sections.map((section) => {
        return (
          <ListItem
            {...props}
            style={{
              backgroundColor:
                section.id === props.activeSection ? "#13262f" : "#cfcfcf",
              color: section.id === props.activeSection ? "#cfcfcf" : "#13262f",
            }}
            onClick={() => props.setSection(section.id)}
          >
            {section.name}
          </ListItem>
        );
      })}
    </div>
  );
}

const ListItem = styled.div<Props>`
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 5px 0;
  margin: 5px 0;
`;
