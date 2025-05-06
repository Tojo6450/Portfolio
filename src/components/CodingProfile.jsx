import React from 'react';
import '../styles/Codingprofile.css';

const codingProfiles = [
  {
    title: "LeetCode",
    screenshots: ["/codingprofile/LeetCode-Logo.png"],
    questionsSolved: "450+",
    maxContestRating: "1710",
    profileLink: "https://leetcode.com/u/algosugo645/",
  },
  {
    title: "GeeksforGeeks",
    screenshots: ["/codingprofile/gfg.png"],
    questionsSolved: "100+",
    maxContestRating: "1810",
    profileLink: "https://www.geeksforgeeks.org/user/supriyo20uydu/",
  },
  {
    title: "Codeforces",
    screenshots: ["/codingprofile/codeforces.png"],
    questionsSolved: "200+",
    maxContestRating: "1180",
    profileLink: "https://codeforces.com/profile/Supriyo645",
  },
  {
    title: "CodeChef",
    screenshots: ["/codingprofile/codechef.png"],
    questionsSolved: "100+",
    maxContestRating: "1625",
    profileLink: "https://www.codechef.com/users/supriyoghorui0",
  },
];

const CodingProfilesGrid = ({theme}) => {
  return (
    <div className="coding-profiles-section">
      <h1 className="coding-profiles-heading">Coding Profiles</h1>
      <div className="grid-container">
        {codingProfiles.map((profile, index) => (
          <div key={index} className={`profile-card ${theme==='dark' ? '':'light-themes'}`}>
            <img src={profile.screenshots[0]} alt={profile.title} className="profile-img" />
            <h3 className={`${theme === 'dark'? 'dark-theme' : 'light-theme'}`}>{profile.title}</h3>
            <p><strong>Questions Solved:</strong> {profile.questionsSolved}</p>
            <p><strong>Max Rating:</strong> {profile.maxContestRating}</p>
            <a href={profile.profileLink} target="_blank" rel="noopener noreferrer">
              <button className="profile-btn">View Profile</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingProfilesGrid;
