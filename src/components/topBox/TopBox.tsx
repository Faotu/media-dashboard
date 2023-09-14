import "./topBox.scss"
import { topDealUsers } from "../../data.ts"

const TopBox = () => {
  return (
    <div className="topBox">
      <div className="list">
        {topDealUsers.map(user =>(
            <div className="listItem" key={user.id}>
                <div className="user">
                  <img src={user.img} alt="" />
                  <div className="userText">
                    <span className="username">{user.username}</span>
                    <span className="email">{user.email}</span>
                  </div>
                    <span className="amount">#{user.amount}</span>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox
