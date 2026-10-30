
export const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

export const today = new Date(
  Date.now() - new Date().getTimezoneOffset() * 60000
)
  .toISOString()
  .slice(0, 10);

export function readStorage(key) {
  try {
    const saved = window.localStorage.getItem(key);

    if (!saved) return [];

    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed)) {
      console.error(
        `Could not read ${key} from local storage: expected an array.`
      );
      return [];
    }

    return key === "tripnest-wishlist"
      ? parsed.filter((item) => typeof item === "string")
      : parsed.filter(
          (item) =>
            item &&
            typeof item.id === "string" &&
            typeof item.destinationId === "string" &&
            typeof item.date === "string" &&
            Number.isInteger(item.travellers)
        );
  } catch (error) {
    console.error(`Could not read ${key} from local storage.`, error);
    return [];
  }
}
