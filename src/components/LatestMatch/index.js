import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-logo-container">
          <div className="team-match-details">
            <p className="competing-team-name">{competingTeam}</p>
            <p className="venue-result-date">{date}</p>
            <p className="venue-result-date">{venue}</p>
            <p className="venue-result-date">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <div className="match-details-info">
          <div className="match-info-item">
            <p className="competition-label">First Innings</p>
            <p className="competition-value">{firstInnings}</p>
          </div>
          <div className="match-info-item">
            <p className="competition-label">Second Innings</p>
            <p className="competition-value">{secondInnings}</p>
          </div>
          <div className="match-info-item">
            <p className="competition-label">Man Of The Match</p>
            <p className="competition-value">{manOfTheMatch}</p>
          </div>
          <div className="match-info-item">
            <p className="competition-label">umpires</p>
            <p className="competition-value">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
