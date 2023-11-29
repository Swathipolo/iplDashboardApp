// Write your code here
// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  const statusClassName = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <p className="match-card-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-card-status ${statusClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
