import { Box } from "@mui/material";
import { CharacterCard } from "dh-marvel/components/characterCard/characterCard";
import { NextPage } from "next";

const CharacterId: NextPage = ({ data }: any) => {
  return (
    <Box sx={{ p: 4 }}>
      <CharacterCard
        image={
          data.character.thumbnail.path +
          "." +
          data.character.thumbnail.extension
        }
        name={data.character.name}
        description={data.character.description}
      />
    </Box>
  );
};

export default CharacterId;

export async function getServerSideProps(context: { query: { id: number } }) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/character/${id}`);
  const data = await res.json();
  return { props: { data: data } };
}
