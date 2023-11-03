import "./userInfo.scss";

function USerInfo({ person, openUser, setOpenUser }) {
  return (
    openUser && (
      <div className="relative">
        <div
          className="close-userInfo"
          onClick={() => setOpenUser(!openUser)}
        ></div>
        <div className="userInfo">
          <div className="info-line">
            <div className="person-info">
              {person.fullName.split(" ")[0].slice(0, 1).toUpperCase() +
                person.fullName.split(" ")[1].slice(0, 1).toUpperCase()}
            </div>
            <div className="info-fullName">{person.fullName}</div>
          </div>
          <div className="info-line">
            <div className="email-info">Email:</div>
            <div className="info-fullEmail">{person.email}</div>
          </div>
        </div>
      </div>
    )
  );
}

export default USerInfo;
