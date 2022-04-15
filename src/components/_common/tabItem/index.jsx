import "./tabItem.css";
const TabItem = ({ item, onClick, currentPage, displayName }) => (
  <div
    className="tab-item"
    style={displayName == currentPage ? { backgroundColor: "#01C4BA" } : {}}
    onClick={onClick}
  >
    {item.icon}
    <span
      className="text-white text-12 bold"
      style={{
        paddingLeft: "15px",
        opacity: displayName == currentPage ? 1 : 0.3,
      }}
    >
      {displayName}
    </span>
  </div>
);

export default TabItem;
