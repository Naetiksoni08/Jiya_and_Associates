import AddEnquiryForm from "@/components/admin/AddEnquiryForm";

export const metadata = { title: "Add Enquiry | Admin" };

export default function AddEnquiryPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Add Enquiry</h1>
        <p className="text-sm text-gray-400 mt-1">Manually log an enquiry received via WhatsApp, email or phone call.</p>
      </div>
      <AddEnquiryForm />
    </div>
  );
}
