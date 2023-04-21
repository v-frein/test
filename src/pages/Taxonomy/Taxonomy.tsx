import editIcon from "../..//assets/images/edit.png";
import {
  Filters,
  FiltersVariants,
  Navigation,
  TaxonomyControls,
  TaxonomyTable,
} from "../../components";
import { ColumnContainer, RowContainer } from "../../layouts";
import { InputWithButton } from "../../ui";
export const Taxonomy = () => {
  return (
    <>
      <Navigation />
      <RowContainer>
        <ColumnContainer width="25%">
          <TaxonomyControls />
          <hr />
          <InputWithButton image={editIcon} />
          <Filters variant={FiltersVariants.TAXONOMY} />
        </ColumnContainer>
        <ColumnContainer width="75%">
          <TaxonomyTable />
        </ColumnContainer>
      </RowContainer>
    </>
  );
};
