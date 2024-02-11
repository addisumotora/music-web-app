import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RightSideSkeleton = () => {
  const numberOfcards = 4;
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#878080">
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          margin: "2rem 0",
        }}
      >
        {Array.from({ length: numberOfcards }, (_, index) => (
          <div
            style={{
              backgroundColor: "#14252f",
              borderRadius: ".5rem",
              padding: "15px",
              maxWidth: "27vh",
              display: "flex",
              gap: "20px",
            }}
            key={index}
          >
            <Skeleton height={"5rem"} width={"5rem"} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                margin: "10px 0",
              }}
            >
              <Skeleton width={150} />
              <Skeleton width={150} />
            </div>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default RightSideSkeleton;
