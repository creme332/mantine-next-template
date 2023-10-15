import { Container, Group, Anchor } from "@mantine/core";
import classes from "../styles/FooterSimple.module.css";

const links = [{ link: "#", label: "Github" }];

//TODO: Change any to tabler-icon
export default function FooterSimple({ icon = null }: any) {
  const items = links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {icon}

        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
