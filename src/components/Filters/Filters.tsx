import { DialogWithTitle } from "../../ui";
import { AffinitiveFilters } from "./AffinitiveFilters";
import { BuildingHistoryFilters } from "./BuildingHistoryFilters";
import { ChangeHistoryFilters } from "./ChangeHistoryFilters";
import { TaxonomyFilters } from "./TaxonomyFilters";

export enum FiltersVariants {
  AFFINITIVE = "AFFINITIVE",
  BUILDING_HISTORY = "BUILDING_HISTORY",
  CHANGE_HISTORY = "CHANGE_HISTORY",
  TAXONOMY = "TAXONOMY",
}

interface FiltersProps {
  variant: FiltersVariants;
}

export const Filters = ({ variant }: FiltersProps) => {
  let filters;

  switch (variant) {
    case FiltersVariants.AFFINITIVE:
      filters = <AffinitiveFilters />;
      break;
    case FiltersVariants.BUILDING_HISTORY:
      filters = <BuildingHistoryFilters />;
      break;
    case FiltersVariants.CHANGE_HISTORY:
      filters = <ChangeHistoryFilters />;
      break;
    case FiltersVariants.TAXONOMY:
      filters = <TaxonomyFilters />;
      break;

    default:
      filters = "Error";
      break;
  }

  return <DialogWithTitle name="Фильтры">{filters}</DialogWithTitle>;
};
