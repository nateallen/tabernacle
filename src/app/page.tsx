import { redirect } from "next/navigation";
import { getAvailableItems } from "@/data/furniture";

export default function Home() {
  const availableItems = getAvailableItems();
  const firstItem = availableItems[0];

  if (firstItem) {
    redirect(`/${firstItem.id}`);
  }

  // Fallback if no items are available
  redirect("/ark-of-the-covenant");
}
