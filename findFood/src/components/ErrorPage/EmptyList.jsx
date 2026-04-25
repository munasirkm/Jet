import './EmptyList.css';

const EmptyList = () => {
  return (
    <div className="empty-list-container">
      <div className="empty-list-card">
        <h2>No restaurants found</h2>
        <p>Please enter a valid postcode or Try again.</p>
      </div>
    </div>
  );
};

export default EmptyList;
