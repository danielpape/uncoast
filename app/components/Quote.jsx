var React = require('react');
var {Link} = require('react-router');

var Quote = (props)=>{
  return(
    <div className="quote">
      <p>"...it's worth my saying you guys are so smart. You're so talented. You've gotten so far on your ability that many of you have <strong>learned to coast</strong>. It isn't not doing you any kind of service to let you continue coasting."</p>
      <p className="quoteAttribution">Shelly Kagan<br/> Philosophy Lecturer, Yale</p>
  </div>
  )
};

module.exports = Quote;
