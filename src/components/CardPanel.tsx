"use client";
import { useReducer } from "react";
import Card from "@/components/Card";

export default function CardPanel() {
  const defaultVenue = new Map([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0],
  ]);

  const cardReducer = (
    venueList: Map<string, number>,
    action: { type: string; venueName: string; rating?: number }
  ) => {
    switch (action.type) {
      case "add": {
        const newVenueList = new Map(venueList);
        newVenueList.set(action.venueName, action.rating ?? 0);
        return newVenueList;
      }
      case "remove": {
        const newVenueList = new Map(venueList);
        newVenueList.delete(action.venueName);
        return newVenueList;
      }
      default:
        return venueList;
    }
  };

  const [venueList, dispatch] = useReducer(cardReducer, defaultVenue);

  return (
    <div>
      <div className="flex flex-wrap justify-around gap-4 m-5">
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/image/bloom.jpg"
          rating={venueList.get("The Bloom Pavilion") || 0}
          onRatingChange={(venue: string, rating: number) =>
            dispatch({ type: "add", venueName: venue, rating })
          }
        />
        <Card
          venueName="Spark Space"
          imgSrc="/image/sparkspace.jpg"
          rating={venueList.get("Spark Space") || 0}
          onRatingChange={(venue: string, rating: number) =>
            dispatch({ type: "add", venueName: venue, rating })
          }
        />
        <Card
          venueName="The Grand Table"
          imgSrc="/image/grandtable.jpg"
          rating={venueList.get("The Grand Table") || 0}
          onRatingChange={(venue: string, rating: number) =>
            dispatch({ type: "add", venueName: venue, rating })
          }
        />
      </div>

      <div className="w-full text-xl font-medium mb-4 text-black">
        Venue List with Rating: {venueList.size}
      </div>
      <div className="p-4">
        {Array.from(venueList).map(([venueName, rating]) => (
          <div
            key={venueName}
            data-testid={venueName}
            onClick={() => dispatch({ type: "remove", venueName: venueName })}
            className="cursor-pointer text-black"
          >
            {venueName}: {rating}
          </div>
        ))}
      </div>
    </div>
  );
}
