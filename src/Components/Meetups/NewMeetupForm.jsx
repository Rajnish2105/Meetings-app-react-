import Card from "../UI/Card";
import { useRef } from "react";
import "./NewMeetupForm.css";

export default function NewMeetupForm({ addMeetup }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const MeetupData = {
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
    };
    addMeetup(MeetupData);
  }

  return (
    <Card>
      <form className="NewMeetupForm" onSubmit={handleSubmit}>
        <div className="NewMeetupForm-control">
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titleInputRef} required />
        </div>
        <div className="NewMeetupForm-control">
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" ref={imageInputRef} required />
        </div>
        <div className="NewMeetupForm-control">
          <label htmlFor="address">Meetup Address</label>
          <input type="text" id="address" ref={addressInputRef} required />
        </div>
        <div className="NewMeetupForm-control">
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            ref={descriptionInputRef}
            required
            rows={5}
          ></textarea>
        </div>
        <div className="NewMeetupForm-actions">
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
