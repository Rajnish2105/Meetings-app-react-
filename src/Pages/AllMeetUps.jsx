import MeetupList from "../Components/Meetups/MeetupList";
import { useLoaderData } from "react-router-dom";

export default function AllMeetUps() {
  const meetups = useLoaderData();
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList DUMMY_DATA={meetups} />
    </section>
  );
}

export async function AllMeetupsLoader() {
  const meetups = await fetch(
    "https://meetupproject-6962c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
  )
    .then((res) => res.json())
    .then((data) => {
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };
        meetups.push(meetup);
      }
      return meetups;
    });
  return meetups;
}
