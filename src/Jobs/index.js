// import {Component} from 'react'
// import Header from '../Header'
// import './index.css'

// const employmentTypesList = [
//   {
//     label: 'Full Time',
//     employmentTypeId: 'FULLTIME',
//   },
//   {
//     label: 'Part Time',
//     employmentTypeId: 'PARTTIME',
//   },
//   {
//     label: 'Freelance',
//     employmentTypeId: 'FREELANCE',
//   },
//   {
//     label: 'Internship',
//     employmentTypeId: 'INTERNSHIP',
//   },
// ]

// // const Jobs = props => <Header />
// class Jobs extends Component {
//   render() {
//     return (
//       <>
//         <Header />
//         <div className="main-conatainer">
//           <div className="search-container">
//             <div className="profile-name">
//               <h1 className="pro-head">Attluri Rahul</h1>
//               <p className="pro-para">
//                 Lead software developer and AI-ML experts
//               </p>
//             </div>
//             <hr className="hr-class" />
//             <p className="employment-heading">Type of Employment</p>
//             {employmentTypesList.map(e => (
//               <label>{e.label}</label>
//             ))}
//             {/* <input type='check-box' key={e.employmentTypeId}/> */}
//           </div>
//           <div className="input-container">
//             <input type="text" placeholder="enter a value" />
//           </div>
//         </div>
//       </>
//     )
//   }
// }
// export default Jobs

import Header from '../Header'
import JobProfile from '../JobProfile'
import './index.css'

const Jobs = () => (
  <>
    <Header />
    <div className="job-profile-container">
      <JobProfile />
    </div>
  </>
)

export default Jobs
