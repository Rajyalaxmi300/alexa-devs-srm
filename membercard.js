// components/MemberCard.js
const MemberCard = ({ name, position }) => (
    <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
      <img src="/avatar-placeholder.png" alt="Member" className="mx-auto w-24 h-24 rounded-full" />
      <h4 className="mt-4 font-semibold">{name}</h4>
      <p className="text-gray-600">{position}</p>
    </div>
  );
  
  export default MemberCard;
  