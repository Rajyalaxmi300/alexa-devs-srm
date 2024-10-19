// components/EventCard.js
const EventCard = ({ title, date }) => (
    <div className="bg-white shadow-md p-6 rounded-lg text-center">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{date}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Learn More</button>
    </div>
  );
  
  export default EventCard;
  