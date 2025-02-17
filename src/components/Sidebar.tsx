import "../styles/sidebar.scss";
import toggleIcon from "../assets/toggle-sidebar.svg";
import { useState, useEffect, useCallback } from "react";

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.shiftKey &&
        event.key.toLowerCase() === "s"
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [toggleSidebar]);

  return (
    <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <button className="toggle-button" onClick={toggleSidebar}>
            <img src={toggleIcon} alt="Toggle sidebar" />
          </button>
        </div>
      </div>
      <div className="main-content">
        <nav>
          {isCollapsed && (
            <button
              type="button"
              title="Toggle sidebar (⌘/Ctrl + Shift + S)"
              className="toggle-button"
              onClick={toggleSidebar}
            >
              <img src={toggleIcon} alt="Toggle sidebar" />
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
