import React from 'react';

const Statistics = ({ statistics }) => {
  const activePercentage = (statistics.activeUsers / statistics.totalUsers) * 100;

  // Determine the color of the progress bar based on percentage
  let progressBarColor = '#2ecc71'; // Green by default
  if (activePercentage < 50) {
    progressBarColor = '#e74c3c'; // Red for low active percentage
  } else if (activePercentage < 80) {
    progressBarColor = '#f39c12'; // Yellow for moderate active percentage
  }

  const progressBarStyle = {
    width: `${activePercentage}%`,
    background: progressBarColor,
    borderRadius: '5px',
    height: '100%',
  };

  return (
    <div className="statistics">
      <h3>System Statistics</h3>
      <div className="stat-item">
        <p><strong>Total Users:</strong> {statistics.totalUsers}</p>
      </div>
      <div className="stat-item">
        <p><strong>Active Users:</strong> {statistics.activeUsers}</p>
      </div>
      <div className="stat-item">
        <p><strong>New Signups:</strong> {statistics.newSignups}</p>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={progressBarStyle}></div>
      </div>

      {/* Show active percentage as text */}
      <div className="active-percentage">
        <p>{Math.round(activePercentage)}% Active</p>
      </div>
    </div>
  );
};

export default Statistics;
