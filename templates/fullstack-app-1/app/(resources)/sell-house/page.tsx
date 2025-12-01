export const metadata = {
  title: "Sell Your House - Fast Turnaround Form | Icon Dumpsters",
  description: "Request a fast-turnaround cleanout and prep-for-sale help. Tell us about the property and your timeline.",

  alternates: { canonical: 'https://icondumpsters.com/sell-house' }};
import SellHouseForm from "@/app/components/SellHouseForm";

export default function SellHousePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Sell House - Fast Turnaround</h1>
      <p className="text-gray-700 mb-6">Tell us about the property so we can help with cleanout and prep-for-sale quickly.</p>
      <SellHouseForm />
    </div>
  );
}


