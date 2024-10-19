// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import MemberCard from '../components/MemberCard';

const Home = () => {
  const dummyEvents = [{ title: 'Hackathon', date: 'Oct 25' }, { title: 'Skill Workshop', date: 'Nov 5' }];
  const dummyMembers = [{ name: 'John Doe', position: 'President' }, { name: 'Jane Smith', position: 'VP' }];

  return (
    <div>
      <Navbar />
      <Hero />
      
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
        <div className="flex justify-center space-x-6">
          {dummyEvents.map((event, index) => (
            <EventCard key={index} title={event.title} date={event.date} />
          ))}
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div className="flex justify-center space-x-6">
          {dummyMembers.map((member, index) => (
            <MemberCard key={index} name={member.name} position={member.position} />
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
