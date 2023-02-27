import React from "react";
import KanBoard from "./KanBoard";

function KanBoards() {
  const groups = [
    {
      title: "Group Title",
      description: "description",
      color: "color",
      items: [
        {
          item: "Item 1",
          person: [
            {
              name: "Person 1",
            },
          ],
          status: "In Progress",
          date: "12 Dec",
          number: 1,

          subItems: [
            {
              subItem: "subItem 1",
              owner: "owner 1",
              status: "status 1",
              date: "date 1",
              // number: 1,
            },
          ],
        },
        {
          item: "Item 2",
          person: [
            {
              name: "Person 2",
            },
          ],
          subItems: [],
          status: "Done",
          date: "12 Feb",
          number: 3,
        },
        {
          item: "Item 3",
          person: [
            {
              name: "Person 3",
            },
          ],
          status: "Pending",
          date: "12 Dec",
          number: 1,
          subItems: [
            {
              subItem: "subItem 1",
              owner: "owner 1",
              status: "status 1",
              date: "date 1",
              // number: 1,
            },
          ],
        },
      ],
    },
  ];
  return groups.map((group, i) => (
    <KanBoard
      key={i}
      title={group.title}
      color={group.color}
      items={group.items}
    />
  ));
}

export default KanBoards;
