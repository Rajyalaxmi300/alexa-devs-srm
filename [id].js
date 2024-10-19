// pages/events/[id].js
import { useRouter } from 'next/router';

const EventPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Event: {id}</h1>
      <p className="mt-4">Details about event {id} will be displayed here.</p>
    </div>
  );
};

export default EventPage;
