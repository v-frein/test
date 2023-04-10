import editIcon from "../..//assets/images/edit.png";
import { TaxonomyControls, TaxonomyFilters } from "../../components";
import { InputWithButton } from "../../ui";
export const Taxonomy = () => {
  return (
    <>
      <TaxonomyControls />
      <hr />
      <InputWithButton image={editIcon} />
      <TaxonomyFilters />
    </>
  );
};
