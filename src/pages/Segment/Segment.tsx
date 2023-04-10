import {
  Accessibility,
  Affinitive,
  Bindings,
  BuildingAndUnloading,
  BuildingHistory,
  ChangeHistory,
  CoverageSchedule,
  Navigation,
  SegmentInfo,
  SegmentName,
  Tags,
} from "../../components";

import { RowContainer, SegmentLayout } from "../../layouts";

import styles from "./Segment.module.css";

export const Segment = () => {
  return (
    <>
      <Navigation />
      <div className={styles.segmentNameContainer}>
        <SegmentName name="Ипотека" />
      </div>
      <SegmentLayout>
        <RowContainer>
          <SegmentInfo />
          <Tags />
          <BuildingAndUnloading />
          <Bindings />
          <Accessibility />
          <Affinitive />
        </RowContainer>
        <RowContainer>
          <CoverageSchedule />
          <ChangeHistory />
          <BuildingHistory />
        </RowContainer>
      </SegmentLayout>
    </>
  );
};
