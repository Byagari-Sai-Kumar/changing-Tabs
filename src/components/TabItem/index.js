import './index.css'

const TabItem = props => {
  const {tabDetails, updatingTabiD, isActive} = props
  const {tabId, displayText} = tabDetails

  const updateTabId = () => {
    updatingTabiD(tabId)
  }

  const activeTabItemClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabItemClassName}`}
        onClick={updateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
