import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  const numberOfcards: number = 7;
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
            }}
            key={index}
          >
            <Skeleton height={80} width={150} />
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
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "1rem",
                width: "100%",
              }}
            >
              <Skeleton width={40} />
              <Skeleton width={40} />
            </div>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default CardSkeleton;
