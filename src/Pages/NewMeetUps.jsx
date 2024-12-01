import NewMeetupForm from "@/Components/Meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

export default function NewMeetUps() {
  const navigate = useNavigate();

  async function addMeetup(meetupData) {
    await fetch(
      "https://meetupproject-6962c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/");
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addMeetup={addMeetup} />
    </section>
  );
}
