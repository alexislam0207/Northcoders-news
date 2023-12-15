import { Link } from "react-router-dom";
import "./NavSection.css"

const NavSection = ({ topics }) => {
  return (
    <nav>
      <Link className="nav_link" to="/all-articles">
        All articles
      </Link>
      {topics.map((topic) => {
        return (
          <Link className="nav_link" key={topic.slug} to={`/${topic.slug}`}>
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavSection;
