import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "..";
import MaterialTable from "material-table";
import PatchedPagination from "../components/PatchedPagination";
import Nav from "../components/Nav";

function BeerList() {
  const [loading, setLoading] = useState(false);
  const { data } = useSelector((state) => state.beerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    store.dispatch({ type: "BEER", setLoading });
  }, [dispatch]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <Nav />
      <div style={{ maxWidth: "100%", marginTop: 80 }}>
        <MaterialTable
          components={{
            Pagination: PatchedPagination,
          }}
          columns={[
            { title: "Name", field: "name" },
            { title: "First brewed", field: "first_brewed" },
            { title: "Abv", field: "abv" },
            { title: "Ibu", field: "ibu" },
            { title: "Ph", field: "ph" },
            { title: "Srm", field: "srm" },
            { title: "Ebc", field: "ebc" },
            { title: "Attenuation level", field: "attenuation_level" },
            { title: "Target fg", field: "target_fg" },
            { title: "Target og", field: "target_og" },
            { title: "Boil volume", field: "boil_volume" },
            { title: "Volume", field: "volume" },
            { title: "Contributed by", field: "contributed_by" },
          ]}
          data={data?.map((item) => ({
            name: item.name,
            first_brewed: item.first_brewed,
            abv: item.abv,
            ibu: item.ibu,
            ph: item.ph,
            srm: item.srm,
            ebc: item.ebc,
            attenuation_level: item.attenuation_level,
            target_fg: item.target_fg,
            target_og: item.target_og,
            boil_volume: item.boil_volume.value,
            volume: item.volume.value,
            contributed_by: item.contributed_by,
          }))}
          title="Beer List"
        />
      </div>
    </>
  );
}

export default BeerList;
