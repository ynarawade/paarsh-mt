import { NotificationCard } from "../components/ui/NotificationCard";
import { dummyNotifications } from "../data/dummyNotifications";

function Notifications() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6">
        <h1 className="font-display text-3xl font-bold text-ink">
          Notifications
        </h1>
        <p className="mt-1 text-sm text-muted">
          Stay updated with your latest activity.
        </p>
      </div>

      <div className="space-y-3">
        {dummyNotifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
}

export default Notifications;
