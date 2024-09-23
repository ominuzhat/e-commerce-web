import { faStar, faStarHalfAlt, faStar as faStarEmpty } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const renderStars = (avgRating: number) => {
  // Handle 0 rating by rendering all empty stars
  if (!avgRating) {
    return (
      <span className="space-x-1">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <FontAwesomeIcon
              icon={faStarEmpty}
              className="text-gray-300"
              key={`empty-${index}`}
            />
          ))}
      </span>
    );
  }

  const fullStars = Math.floor(avgRating);
  const hasHalfStar = avgRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <span className="space-x-1">
      {/* Render full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon
            icon={faStar}
            className="text-yellowColor"
            key={`full-${index}`}
          />
        ))}

      {/* Render half star if applicable */}
      {hasHalfStar && (
        <FontAwesomeIcon
          icon={faStarHalfAlt}
          className="text-yellowColor"
          key="half"
        />
      )}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon
            icon={faStarEmpty}
            className="text-gray-300"
            key={`empty-${index}`}
          />
        ))}
    </span>
  );
};
