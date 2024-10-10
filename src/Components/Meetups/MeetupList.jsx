import MeetupItem from "./MeetupItem";
import "./MeetupList.css";

export default function MeetupList({ DUMMY_DATA }) {
  return (
    <ul className="MeetupList">
      {DUMMY_DATA.map((data) => (
        <MeetupItem key={data.id} {...data} />
      ))}
    </ul>
  );
}
