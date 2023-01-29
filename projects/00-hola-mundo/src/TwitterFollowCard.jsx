import { useState } from "react"

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button"

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt={`${userName} avatar`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleFollow}>
          <span className="tw-followCard-text">
            {isFollowing ? "Following" : "Follow"}
          </span>
          <span className="tw-followCard-stopFollow">Unfollow</span>
        </button>
      </aside>
    </article>
  )
}
