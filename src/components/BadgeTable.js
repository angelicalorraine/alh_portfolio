import React from "react";
import { Container, Table, Button, Badge } from "react-bootstrap";
import web from "../assets/web.png";
import interfaceD from "../assets/interface.png";
import visual from "../assets/visual.png";
import UXUD from "../assets/UXUD.png";
import ReactB from "../assets/React.png";
import JS from "../assets/JS.png";
import Node from "../assets/Node.png";
import SQL from "../assets/SQL.png";
import HTML from "../assets/HTML.png";

const BadgeTable = () => {
  const codeBadges = [
    {
      src: ReactB,
      href: "https://www.credly.com/badges/e1238d45-87d5-448e-9fb1-40a7293c6e6e/public_url",
      alt: "React Badge",
    },
    {
      src: JS,
      href: "https://www.credly.com/badges/5c96054b-210d-4e4f-8f99-46464a2f5560/public_url",
      alt: "Javascript & JQuery Badge",
    },
    {
      src: Node,
      href: "https://www.credly.com/badges/926e0fbb-2500-4bd8-beb5-27f46b1a132b/public_url",
      alt: "Node & Express Badge",
    },
    {
      src: SQL,
      href: "https://www.credly.com/badges/ba42fcc5-e8cc-4a0a-b1f8-83089fd1e6f6/public_url",
      alt: "SQL & NoSQL Databases Badge",
    },
    {
      src: HTML,
      href: "https://www.credly.com/badges/e5efca28-dd8e-4f33-9a52-1ff91007328b/public_url",
      alt: "HTML/CSS Badge",
    },
  ];

  const uxBadges = [
    {
      src: web,
      href: "https://www.credly.com/badges/8390eb15-79a6-4436-abca-68dfcacf5931/public_url",
      alt: "Web Design Badge",
    },
    {
      src: interfaceD,
      href: "https://www.credly.com/badges/d55aed9a-1084-4dc8-a1b7-750f45fbae4d/public_url",
      alt: "Interface Design Badge",
    },
    {
      src: visual,
      href: "https://www.credly.com/badges/86d00870-6146-42a1-8546-0e8ff30e69af/public_url",
      alt: "Visual Design Badge",
    },
    {
      src: UXUD,
      href: "https://www.credly.com/badges/3fff4eba-e681-4c99-bfd1-7f45012f9d42/public_url",
      alt: "User Experience and Design Thinking Badge",
    },
  ];
  return <></>;
};

export default BadgeTable;
