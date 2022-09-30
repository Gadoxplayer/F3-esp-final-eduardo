import { Box } from "@mui/material";
import { CharacterCard } from "dh-marvel/components/characterCard/characterCard";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import { NextPage } from "next";

const CharacterId: NextPage = ({ data }: any) => {
  return (
    <Box sx={{ p: 4 }}>
      <CharacterCard
        image={data.thumbnail.path + "." + data.thumbnail.extension}
        name={data.name}
        description={data.description}
      />
    </Box>
  );
};

export default CharacterId;

export async function getServerSideProps(context: { query: { id: number } }) {
  const { id } = context.query;
  const res = await getCharacter(id);

  console.log(res);

  return { props: { data: res } };
}
