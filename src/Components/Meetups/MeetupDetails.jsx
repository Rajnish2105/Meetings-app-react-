import "./MeetupDetails.css";
import { useLoaderData } from "react-router-dom";

export default function MeetupDetails() {
  //   const { id } = useParams();
  const meetup = useLoaderData();
  if (!meetup) {
    return <p>Loading failed. Please try again.</p>;
  }

  return (
    <div className="Meetup-Details-container">
      <img
        src={meetup.image}
        alt={meetup.title}
        className="Meetup-Details-image"
      />
      <h1 className="Meetup-Details-title">{meetup.title}</h1>
      <p className="Meetup-Details-location">{meetup.address}</p>
      <p className="Meetup-Details-description">{meetup.description}</p>
    </div>
  );
}

export async function MeetupDetailsLoader({ params }) {
  const { id } = params;
  const meetup = await fetch(
    `https://meetupproject-6962c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups/${id}.json`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch meetup details");
      }
      return res.json();
    })
    .then((data) => {
      if (!data) {
        throw new Error("Meetup not found");
      }
      return {
        id,
        ...data,
      };
    })
    .catch((err) => {
      console.error("Error fetching meetup details:", err);
      return null; // Handle errors gracefully
    });

  return meetup; // Return the fetched meetup data
}
