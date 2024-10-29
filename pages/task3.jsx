import React, { useState } from 'react';

function Task3({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  // Helper function to parse custom date format and return only date part
  const parseDate = (dateString) => {
    const [datePart] = dateString.split(" ");
    const [day, month, year] = datePart.split("/").map(Number);

    // Return a date with only the year, month, and day (time set to midnight)
    return new Date(year, month - 1, day);
  };

  const filteredPosts = posts?.data?.filter((item) => {
    const matchesSearch =
      searchTerm === '' ||
      item.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phoneNumber?.includes(searchTerm) ||
      item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.adId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.CampanName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.postCode?.includes(searchTerm);

    const createdDate = parseDate(item.createdTime);

    // Calculate date range with full day for startDate and endDate
    const start = startDate ? new Date(new Date(startDate).setHours(0, 0, 0, 0)) : null;
    const end = endDate ? new Date(new Date(endDate).setHours(23, 59, 59, 999)) : null;

    const isWithinDateRange =
      (!start || createdDate >= start) &&
      (!end || createdDate <= end);

    return matchesSearch && isWithinDateRange;
  });

  return (
    <div className='container'>
      <h1 className='text-center'>Employee Details</h1>

      <div>
        <label htmlFor="search">Search</label>
        <input
          type='search'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <br />
        <label htmlFor="start-date">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <label htmlFor="end-date">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Id</th>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Ad ID</th>
            <th>Created Time</th>
            <th>Campaign Name</th>
            <th>Post Code</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts?.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.id}</td>
              <td>{item.fullName}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.email}</td>
              <td>{item.adId}</td>
              <td>{item.createdTime}</td>
              <td>{item.CampanName}</td>
              <td>{item.postCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task3;

export async function getStaticProps() {
  const res = await fetch('https://ditscrm.divsolution.com/task-Api');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
