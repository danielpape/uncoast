var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();

    var locationToSearch = this.refs.locationBoxString.value;
    var encodedLocation = encodeURIComponent(locationToSearch);

    if (locationToSearch.length > 0) {
      this.refs.locationBoxString.value = '';
      window.location.hash = '#/?location='+encodedLocation;

    }
  },
  render: function(){
    return(
      <div className="top-bar" id="menu">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Uncoast
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li>
                <IndexLink to="/">Home</IndexLink>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
