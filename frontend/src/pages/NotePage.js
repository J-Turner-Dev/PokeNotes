import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

const NotePage = () => {
  let params = useParams();
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [params.id]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${params.id}/`);
    let data = await response.json();
    setNote(data);
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
